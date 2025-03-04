import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { LogoutOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FiMenu, FiX } from "react-icons/fi";
import AlianteGROUP from "./../../assets/AlianteGROUP.svg";

const { Header } = Layout;

const HeaderComponent = ({ setToggled, isToggled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = (
    <Menu>
      <Menu.Item icon={<LogoutOutlined />} key="logoutMenu">
        Logout
      </Menu.Item>
    </Menu>
  );

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`} style={{ padding: 0 }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-10 w-auto cursor-pointer"
            src={AlianteGROUP}
            alt="Logo"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9";
              e.target.alt = "Fallback Logo";
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-semibold text-accent hover:text-primary transition-all">
              {link.name}
            </a>
          ))}
        </nav>

        {/* User & Toggle */}
        <div className="flex items-center space-x-4">
          <Dropdown overlay={menu}>
            <Avatar icon={<UserOutlined />} className="cursor-pointer" />
          </Dropdown>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md z-40 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </Header>
  );
};

export default HeaderComponent;
