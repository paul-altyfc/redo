exports.redoMenu = (menu, chef, dietary_req) => {
  return menu.reduce((newMenu, currMenu) => {
    currMenu.recommended_course = currMenu.course;
    delete currMenu.course;
    if (chef) currMenu.chef = chef;
    newMenu.push(currMenu);

    return newMenu;
  }, []);
};
