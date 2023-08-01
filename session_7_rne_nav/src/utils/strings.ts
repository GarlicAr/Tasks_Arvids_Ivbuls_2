import LocalizedStrings from "react-native-localization";
import { createContext } from "react";

export const strings = new LocalizedStrings({
  "en": {
    button_home_add_habit: "Add Habit",
    home_title: "Home",
    settings_title: "Settings",
    back_button: "Back",
    switch_to_en: "English"
  },
  "lv": {
    button_home_add_habit: "Pievienot paradumu",
    home_title: "Sakums",
    settings_title: "Iestatijumi",
    back_button: "Atpakal",
    switch_to_lv: "Latviesu"
  }
})

export const ContextStrings = createContext(strings.getLanguage())
