
  import React, {useState, useEffect} from 'react';
  import mainMenu from "../../database/menu/main-menu.json";

  const WomenHome = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [subMenuData, setSubMenuData] = useState([]);
    const [action, setAction] = useState(null);

    useEffect(() => {
      const handleMouseEnter = (subMenu) => {
        setSubMenuData(subMenu);
        setShowSubMenu(true);
      };
      
      const handleMouseleave = () => {
        setShowSubMenu(false);
      };

      if (action === 'women') {
        handleMouseEnter(mainMenu.navbar.Women);
      } else if (action === 'kids'){
        handleMouseEnter(mainMenu.navbar.Kids);
      } else {
        handleMouseleave();
      }
    }, [action]
    );

    return (
      <div>
        <div>
          <button onMouseEnter={() => setAction('women')}
          onMouseLeave={() => setAction(null)}>Women</button>
          <button onMouseEnter={() => setAction('kids')}
          onMouseLeave={() => setAction(null)}>Kids</button>
        </div>

        {
          showSubMenu && (
            <div>
              {subMenuData.map((item,index) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.menuItemps.map((menuItem, index) => (
                      <li key={index}>
                        <a href={menuItem.url}>{menuItem.title}</a>
                      </li>
                    ))}
                  </ul>
                  </div>
              ))}
            </div>
          )
        }
      </div>
    ); 

    
  };

  export default WomenHome;