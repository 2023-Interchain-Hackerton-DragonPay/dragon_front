class CustomColor {
    constructor(hex) {
        this.hex = hex;
    }
    withOpacity(opacity = 1) {
        const [r, g, b] = this.hex.match(/\w\w/g).map((x) => parseInt(x, 16));
        return `rgba(${r},${g},${b},${opacity})`;
    }
    valueOf() {
        return this.hex;
    }
}

const Color = function (hex) {
    const color = new CustomColor(hex);
    Object.defineProperty(color, "__emotion_styles", {
        value: function () {
            return hex;
        },
    });

    return color;
};

export const COLORS = {
    white: Color("#ffffff"),
    black: Color("#000000"),
    dark_1: Color("#2a2a2a"),
    dark_2: Color("#3a3a3a"),
    dark_3: Color("#4a4a4a"),

    gray_7e: Color("#7e7e7e"),
    gray_9e: Color("#9e9e9e"),
    gray_f2: Color("#f2f2f2"),

    gray_1: Color("#9292AA"),
    gray_2: Color("#BEBECC"),
    gray_3: Color("#E9E9EE"),
    gray_4: Color("#F6F7FC"),

    simple_gray_2: Color("#d5dbe5"),

    yellow_1: Color("#FAE64C"),
    yellow_2: Color("#F9E64C"),
    yellow_3: Color("#F8E54C"),
    yellow_4: Color("#F7E44C"),
    yellow_5: Color("#F6E34C"),
    yellow_6: Color("#F5E24C"),
    yellow_7: Color("#F4E14C"),
    yellow_8: Color("#F3E04C"),
    yellow_9: Color("#F2DF4C"),

    blue_1: Color("#443DF6"),
    blue_2: Color("#5C36EE"),
    blue_3: Color("#5552FF"),
    blue_4: Color("#5383FF"),
    blue_5: Color("#605DEB"),
    blue_6: Color("#6663FF"),
    blue_7: Color("#746FFF"),
    blue_8: Color("#7774FF"),
    blue_9: Color("#8886FF"),
    blue_10: Color("#9997FF"),
    blue_11: Color("#AAA8FF"),
    blue_12: Color("#BBBAFF"),
    blue_13: Color("#CCCBFF"),
    blue_14: Color("#DDDCFF"),
    blue_15: Color("#EBEEFF"),
    blue_16: Color("#EEEEFF"),
    simple_blue_1: Color("#498EF6"),
    simple_blue_2: Color("#1f314e"),

    red_4: Color("#FF4951"),
    red_1: Color("#EB5D5D"),
    red_2: Color("#FF6262"),
    red_3: Color("#FF6F66"),
    red_5: Color("#FFEFEF"),

    green_1: Color("#69CAA1"),
    green_2: Color("#69CAA1"),
    green_3: Color("#32E2AD"),

    purple_1: Color("#B6A4FF"),
};
