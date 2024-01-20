import { extendTheme } from "@chakra-ui/react";

const boxShadow = "0px 4px 234px rgba(221, 161, 94, 0.3)";
const colorValue = boxShadow.match(/rgba?\(([^)]+)\)/)[1];
const bgColor = `rgba(${colorValue})`;

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1636px",
};

export const customTheme = extendTheme({
  fonts: {
    heading: `"antonia-variable", sans-serif`,
    body: `"antonia-variable", sans-serif`,
  },
  breakpoints,
  components: {
    Radio: {
      variants: {
        primary: {
          control: {
            borderColor: "#CC6E3B",
            bg: "#fff",
            _checked: {
              borderColor: "#CC6E3B",
              bg: "#CC6E3B",
            },
          },
        },

        admin: {
          control: {
            borderColor: "#0D0718",
            _checked: {
              borderColor: "#0D0718",
              bg: "#0D0718",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Input: {
      variants: {
        primary: {
          field: {
            bgColor: "#fff",
            borderRadius: "10px",
            color: "#fff",
            _placeholder: {
              color: "gray",
              padding: "5",
            },
          },
        },
        alternate: {
          field: {
            bgColor: "#F2F2F2",
            border: "1px solid #E0E0E0",
            borderRadius: "5px",
            color: "#fff",
            _placeholder: {
              color: "#333333",
              padding: "10px",
              fontSize: "13px",
            },
          },
        },
        secondary: {
          field: {
            bgColor: "#F2F2F2",
            borderRadius: "10px",
            color: "#000",
            _placeholder: {
              color: "#BDBDBD",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Select: {
      variants: {
        primary: {
          field: {
            bgColor: "#F1EBF9",
            borderRadius: "10px",
            cursor: "pointer",
          },
        },
        secondary: {
          field: {
            rounded: "full",
            borderRadius: "10px",
            cursor: "pointer",
            bg: "#fafafa",
            border: "1px solid #E0E0E0",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Textarea: {
      variants: {
        primary: {
          bg: "#f2f2f2",
          color: "#fff",
          borderRadius: "10px",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
        secondary: {
          bg: "#fff",
          color: "#fff",
          border: "1px solid gray",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },

    Button: {
      variants: {
        primary: {
          border: "none",
          borderRadius: "unset",
          fontSize: "14px",
          height: "40px",
          bgColor: "#7127BA",
          color: "#fff",
          fontWeight: 600,
          _hover: {
            bgColor: "#7127BA",
            color: "#fff",
          },
          _disabled: {
            _hover: {
              border: "1px solid #7B47CC",
              color: "#7127BA",
            },
          },

          _active: {
            bgColor: "#7127BA",
            border: "2px solid #CC6E3B",
            color: "#fff",
          },
        },
        secondary: {
          bgColor: "transparent",
          borderRadius: "unset",
          border: "1.5px solid #8F512E",
          color: "brownColor",
          fontSize: "14px",
          height: "40px",
          fontWeight: 600,
          _hover: {
            bgColor: bgColor,
            color: "brownColor",
          },
          _disabled: {
            _hover: {
              border: "1px solid #7B47CC",
              color: "brownColor",
            },
          },

          _active: {
            bgColor: bgColor,
            border: "1px solid #CC6E3B",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },

  colors: {
    mainBg: "#11071F",
    headerBg: "#1A0B2E",
    brownColor: "#8F512E",
    brownHover: "#CC6E3B",
    semiPurple: "#F6F3FC",
    gradient: "linear-gradient(90deg, #F1EBF9 0%, #FDF8E7 79.13%)",
    semiOrange: "#FDF8E7",
    orangeColor: "#F3C948",
    color: "#000",
  },
});
