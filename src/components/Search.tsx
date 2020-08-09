import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import mousetrap from "mousetrap";
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChangeOptions
} from "downshift";

interface IItem {
  title: string;
  type: string;
  tags: string[];
  summary: string;
  searchString: string;
  value: string;
}

export const Search = () => {
  const data = useStaticQuery(graphql`
    query SearchBarQuery {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            type
            tags
            summary
          }
        }
      }
    }
  `);

  const items: IItem[] = data.allMdx.nodes.map(({ fields, frontmatter }) => {
    return {
      ...frontmatter,
      value: fields.slug,
      searchString: `${frontmatter.title} ${frontmatter.tags.join(" ")} ${
        frontmatter.summary
      }`.toLowerCase()
    };
  });

  return <SearchInput items={items} />;
};

interface SearchInputProps {
  items: IItem[];
}

const SearchInput = ({ items }: SearchInputProps) => {
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
      setInputItems(
        items.filter(item =>
          item.searchString.includes(inputValue.toLowerCase())
        )
      );
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        navigate(selectedItem.value);
      }
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
                    {item.title}
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
