import React from "react";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function FocusedName(route) {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
          return 'Home';
        case 'Learn':
          return 'Learn';
      }


}