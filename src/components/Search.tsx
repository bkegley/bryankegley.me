import React from "react";
import mousetrap from "mousetrap";
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChangeOptions
} from "downshift";

interface IItem {
  name: string;
  value: string;
}

const items: IItem[] = [
  { name: "hey", value: "hey" },
  { name: "there", value: "there" },
  { name: "folks", value: "folks" }
];

export const Search = () => {
  const [inputItems, setInputItems] = React.useState<IItem[]>(items);
  const [shouldUpdateSearchText, setShouldUpdateSearchText] = React.useState(
    false
  );

  const ref = React.useRef(null);

  const stateReducer = React.useCallback(
    (
      state: UseComboboxState<IItem>,
      actionAndChanges: UseComboboxStateChangeOptions<IItem>
    ) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange: {
          if (!shouldUpdateSearchText) {
            setShouldUpdateSearchText(true);
            return {
              ...changes,
              inputValue: state.inputValue
            };
          }
          return changes;
        }
        case useCombobox.stateChangeTypes.InputBlur: {
          setShouldUpdateSearchText(false);
        }
        default: {
          return changes;
        }
      }
    },
    [shouldUpdateSearchText]
  );

  const {
    toggleMenu,
    getLabelProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    isOpen,
    getMenuProps,
    getComboboxProps
  } = useCombobox({
    items: inputItems,
    stateReducer,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(items.filter(item => item.value.includes(inputValue)));
    }
  });

  React.useEffect(() => {
    mousetrap.bind("s", () => {
      if (!isOpen) {
        toggleMenu();
        ref.current.focus();
      }
    });

    return () => Mousetrap.unbind("s");
  }, []);

  return (
    <div>
      <div className="absolute top-0 left-0 z-50 w-full mt-10 text-center">
        <label className="sr-only" {...getLabelProps()}>
          Search
        </label>
        <div {...getComboboxProps()}>
          <input
            className="mx-auto bg-white"
            type="text"
            placeholder="Type 's' to search"
            {...getInputProps({ ref })}
          />
        </div>
        <ul {...getMenuProps()}>
          {isOpen
            ? inputItems.map((item, index) => {
                return (
                  <li
                    className={`${
                      highlightedIndex === index ? "bg-red-100" : ""
                    }`}
                    key={`${item}${index}`}
                    {...getItemProps({ item, index })}
                  >
                    {item.value}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      {isOpen ? (
        <div className="fixed inset-0 z-40 w-full h-full bg-gray-900 opacity-50" />
      ) : null}
    </div>
  );
};
