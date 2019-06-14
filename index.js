exports.redoMenu = (menu, chef, dietary_req) => {
  return menu.reduce((newMenu, currMenu) => {
    currMenu.recommended_course = currMenu.course;
    delete currMenu.course;
    // currMenu.id = parseInt(currMenu.id, 10);
    currMenu.id = +currMenu.id;
    if (chef) currMenu.chef = chef;
    if (dietary_req) currMenu[dietary_req] = true;
    newMenu.push(currMenu);

    return newMenu;
  }, []);
};
