import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Mousetrap from "mousetrap";
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChangeOptions,
} from "downshift";
import { Badge } from "./Badge";

interface IItem {
  title: string;
  type: string;
  tags: string[];
  summary: string;
  searchString: string;
  value: string;
}

interface IQueryData {
  allMdx: {
    nodes: Array<{
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        type: string;
        tags?: string[];
        summary: string;
      };
    }>;
  };
}

export const Search = () => {
  const data: IQueryData = useStaticQuery(graphql`
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
      tags: frontmatter.tags ?? [],
      value: fields.slug,
      searchString: `${frontmatter.title} ${frontmatter.tags?.join(" ")} ${
        frontmatter.summary
      }`.toLowerCase(),
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

  const inputItemList = inputItems.slice(0, 5);

  const ref = React.useRef(null);

  const stateReducer = React.useCallback(
    (
      state: UseComboboxState<IItem>,
      actionAndChanges: UseComboboxStateChangeOptions<IItem>
    ) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.FunctionToggleMenu: {
          if (!state.highlightedIndex) {
            return {
              ...changes,
              highlightedIndex: 0,
            };
          }
          return changes;
        }
        case useCombobox.stateChangeTypes.InputChange: {
          if (!shouldUpdateSearchText) {
            setShouldUpdateSearchText(true);
            return {
              ...changes,
              inputValue: state.inputValue,
              highlightedIndex:
                state.highlightedIndex < 0 ? 0 : changes.highlightedIndex,
            };
          }
          return {
            ...changes,
            highlightedIndex:
              state.highlightedIndex &&
              state.highlightedIndex <= inputItemList.length
                ? state.highlightedIndex
                : 0,
          };
        }
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter: {
          setShouldUpdateSearchText(false);
          return {
            ...changes,
            inputValue: "",
          };
        }
        case useCombobox.stateChangeTypes.InputBlur: {
          setShouldUpdateSearchText(false);
          // @ts-ignore
          ref.current.blur();
          return {
            ...changes,
            inputValue: "",
          };
        }
        default: {
          return changes;
        }
      }
    },
    [shouldUpdateSearchText, inputItemList]
  );

  const {
    toggleMenu,
    getLabelProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    isOpen,
    getMenuProps,
    getComboboxProps,
  } = useCombobox({
    items: inputItemList,
    stateReducer,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.searchString.includes(inputValue?.toLowerCase() ?? "")
        )
      );
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        navigate(selectedItem.value);
      }
    },
  });

  React.useEffect(() => {
    Mousetrap.bind("s", () => {
      if (!isOpen) {
        toggleMenu();
        // @ts-ignore
        ref.current.focus();
      }
    });

    return () => {
      Mousetrap.unbind("s");
    };
  }, []);

  return (
    <div>
      <div className="absolute top-0 left-0 z-50 w-full py-4 md:w-1/2 md:py-8">
        <label {...getLabelProps()}>
          <div
            {...getComboboxProps()}
            className={`${
              isOpen ? "w-full" : "w-1/4 md:w-3/5"
            } transition-all duration-150 flex items-center justify-between w-1/4 px-6 py-2 bg-gray-900 rounded`}
          >
            <input
              className="w-full p-0 text-gray-400 placeholder-transparent bg-transparent border-0 outline-none appearance-none md:placeholder-current transition-all duration-300 ease-in-out"
              type="text"
              placeholder="Type s to search..."
              onFocus={() => toggleMenu()}
              {...getInputProps({ ref })}
            />
            <span className="inline-flex flex-col items-center justify-center px-2 py-1 text-gray-600 border border-gray-600 rounded">
              s
            </span>
          </div>
          <div
            className="w-5/6 mx-auto mt-6 overflow-hidden text-gray-400 bg-gray-900 rounded shadow-xl"
            {...getMenuProps()}
          >
            {isOpen ? (
              <ul className="overflow-hidden space-y-4">
                {inputItemList.map((item, index) => {
                  return (
                    <li
                      className={`p-2 md:p-4 border-l-4 md:border-r-4 md:border-l-0 ${
                        highlightedIndex === index
                          ? "border-secondary"
                          : "border-transparent"
                      }`}
                      key={`${item}${index}`}
                      {...getItemProps({ item, index })}
                    >
                      <div className="py-2 mx-5 text-2xl">{item.title}</div>
                      <div className="hidden py-2 ml-5 text-gray-500 md:block">
                        <p>{item.summary}</p>
                        <div className="flex items-center mt-4 space-x-2">
                          {item.tags.map((tag) => {
                            return (
                              <Badge type="secondary" size="sm">
                                {tag}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </label>
      </div>
      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-gray-900 opacity-25" />
      ) : null}
    </div>
  );
};
