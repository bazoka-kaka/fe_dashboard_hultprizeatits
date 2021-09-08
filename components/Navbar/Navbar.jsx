import React from "react";
import { MenuItems } from "./MenuItems";
import { withRouter } from "next/router";
import Dropdown from "./Dropdown";
import Link from "next/link";

export default withRouter(
  class Navbar extends React.Component {
    state = { clicked: false, dropdown: false };

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    };

    closeMobileMenu = () => {
      this.setState({ clicked: false });
    };

    onMouseEnter = () => {
      if (window.innerWidth < 960) {
        this.setState({ dropdown: false });
      } else {
        this.setState({ dropdown: true });
      }
    };

    onMouseLeave = () => {
      if (window.innerWidth < 960) {
        this.setState({ dropdown: false });
      } else {
        this.setState({ dropdown: false });
      }
    };

    render() {
      return (
        <nav className="relative flex items-center justify-center h-16 transform bg-white shadow-2xl">
          <div className="navbar-logo">
            <a href="#">
              <img
                src="/hultprize-logo.png"
                alt="hultprize logo"
                className="absolute w-10 cursor-pointer top-2 left-8 sm:left-24"
              ></img>
            </a>
          </div>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={`right-8 block sm:hidden top-4 absolute text-3xl  ${
                this.state.clicked ? "fa fa-times" : "fa fa-bars"
              }`}
            ></i>
          </div>
          <ul
            className={`${
              this.state.clicked
                ? "flex opacity-100 transform duration-500 right-0 flex-col justify-center text-center py-5 self-center bg-black text-white w-full top-16"
                : "flex transform right-full text-white bg-black py-5 justify-center self-center flex-col top-16 opacity-0 w-full text-center duration-500"
            }
            h-screen sm:h-auto justify-evenly pb-20 sm:pb-0 sm:flex sm:flex-row sm:bg-transparent sm:top-0 sm:text-black sm:justify-end sm:opacity-100 gap-10 sm:gap-5 sm:right-10 sm:justify-self-end absolute uppercase`}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={this.closeMobileMenu}
                    href={item.url}
                    className={`hover:text-gray-600 ${item.cName}
                                    sm:hover:bg-black sm:hover:text-white sm:px-3 sm:py-2 sm:rounded-3xl
                                        transform duration-150
                                    `}
                  >
                    {this.props.router.locale === "en"
                      ? item.title
                      : item.title === "Home"
                      ? "Beranda"
                      : item.title === "Timeline"
                      ? "Lini masa"
                      : item.title === "About"
                      ? "Tentang"
                      : item.title === "Register"
                      ? "Daftar"
                      : ""}
                  </a>
                </li>
              );
            })}
            <li
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            >
              <div className="cursor-pointer">
                {this.props.router.locales.map((locale) => {
                  if (locale !== this.props.router.locale) {
                    return (
                      <Link href={this.props.router.asPath} locale={locale}>
                        <a onClick={this.closeMobileMenu}>{locale}</a>
                      </Link>
                    );
                  }
                })}{" "}
                <i className="hidden fa fa-caret-down sm:inline" />
              </div>
              {this.state.dropdown && <Dropdown />}
            </li>
          </ul>
        </nav>
      );
    }
  }
);
