import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import Navbar from "components/Navbars/Navbar.js";
import DashboardProfile from "../DashboardProfile";

describe("DashboardProfile", () => {
  const render = props => shallow(<DashboardProfile {...props} />);

  let rendered;

  beforeEach(() => {
    rendered = render();
  });

  describe("UI", () => {
    it("should have components", () => {
      expect(rendered.find(Dashboard)).toHaveLength(1);
      expect(rendered.find(UserProfile)).toHaveLength(1);
      expect(rendered.find(Navbar)).toHaveLength(1);
    });
    it("should have structure", () => {
      expect(
        rendered.containsMatchingElement(
          <div>
            <div>
              <Navbar onSearchPerson={jest.fn()} />
            </div>
            <UserProfile />
            <Dashboard />
          </div>
        )
      ).toBe(true);
    });
    it("should match snapshot", () => {
      expect(shallowToJson(render())).toMatchSnapshot();
    });
  });
});
