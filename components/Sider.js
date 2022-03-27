import { Menu } from "antd";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { categories } from "../utils/constants";

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Sider = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [value, setValue] = useState(0);
  const { components } = categories[value];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
      >
        {categories.map((link, index) => {
          const { id, text } = link;
          return (
            <SubMenu
              key={id}
              onClick={() => setValue(index)}
              icon={<MailOutlined />}
              title={text}
              // components={components}
            >
              {link.components}
            </SubMenu>
          );
        })}
      </Menu>
    </>
  );
};

export default Sider;
