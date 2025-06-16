var cek_attr_google = [document.currentScript.getAttribute("api-key-google")];
var cek_attr_resvoice = [document.currentScript.getAttribute("api-key-resvoice")];
var api_key_google = '';
if (typeof api_key_google_cloud !== "undefined") {
  api_key_google = api_key_google_cloud;
}
if (cek_attr_google.length > 0) {
  api_key_google = cek_attr_google[0];
}
var base_url_website = window.location.origin.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
var path_javascript = new URL(location.href).pathname;
var body_website = document.body;
var html_website = document.documentElement;
var pageHeight_website = Math.max(body_website.scrollHeight, body_website.offsetHeight, html_website.clientHeight, html_website.scrollHeight, html_website.offsetHeight);
var bg_color_icon = '';
var conditional = ["ppid-vnew.animemusic.us", "lapor.spbe.sangkuriang.co.id", "lapor.go.id", "latihan.lapor.go.id", "wapresmendengar.lapor.go.id", "lapormaswapres.lapor.go.id"];
if (conditional.includes(base_url_website)) {
  bg_color_icon = "#d0021b";
} else {
  bg_color_icon = "rgb(0, 72, 255)";
}
var css_loader = "\n  #widget_menu_disabilitas svg{\nwidth:unset !important;\nheight: unset !important;\n}\n.jarak_kanan_radio {\n\tdisplay       : flex;\n\tflex-direction: column;\n\talign-items   : flex-end;\n\twidth         : max-content;\n}\n#widget_menu_disabilitas input {\n min-height:unset;\n}\n.radio_widget_dsb {\n    display: flex !important;\n    flex-direction  : column !important;\n\tbackground-color  : transparent !important;\n\tborder            : .0625em solid " + bg_color_icon + " !important;\n\tborder-radius     : 50% !important;\n\tbox-shadow        : inset 0 0 0 0 white;\n\tcursor            : pointer;\n\tfont              : inherit;\n\theight            : 21px !important;\n\toutline           : none;\n\twidth             : 21px !important;\n\t-moz-appearance   : none;\n\t-webkit-appearance: none;\n}\n\ninput[type=\"radio\"][checked=\"checked\"][class=\"radio_widget_dsb\"] {\n    display: flex !important;\n    flex-direction  : column !important;\n    background-image:unset !important;\n\tbackground-color  : " + bg_color_icon + " !important;\n\tbox-shadow        : inset 0 0 0 .2375em white !important;\n\t-webkit-transition: background .15s, box-shadow .1s;\n\ttransition        : background .15s, box-shadow .1s;\n}\n\n\n.group_move_widget {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\tborder          : 2px solid " + bg_color_icon + ";\n\tbackground-color: white;\n\tmargin-left     : 15px;\n\tmargin-right    : 15px;\n\tpadding-top     : 15px;\n\tpadding-left    : 15px;\n\tpadding-right   : 15px;\n\tborder-radius   : 15px;\n\tmargin-top      : 5px;\n    width: 90%;\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n}\n\n.radio_row_widget {\n\tdisplay       : flex;\n\tflex-direction: row;\n\talign-items   : center;\n\n\tcursor       : pointer;\n\tmargin-bottom: 10px;\n\twidth        : 100%;\n}\n\n.jarak_radio {\n\tmargin-left        : 5px;\n\tcolor              : black;\n\tfont-size          : 12px;\n\tcolor              : black;\n\tfont-family        : \"Plus Jakarta Sans\", sans-serif !important;\n\tfont-optical-sizing: auto;\n\tfont-weight        : 600;\n\tfont-style         : normal;\n\twidth              : 100%;\n\talign-items        : flex-start !important;\n\ttext-align         : left;\n}\n\n.box_content_settings {\n\twidth          : 25px;\n\theight         : 25px;\n\tdisplay        : flex;\n\ttext-align     : center;\n\tflex-direction : column;\n\talign-items    : center;\n\tjustify-content: center;\n\tborder-radius  : 25px;\n\n\tcolor : black;\n\tcursor: pointer;\n\n}\n\n\n.row_data_widget {\n\tdisplay            : flex;\n\tflex-direction     : row;\n\tmargin-left        : 10px;\n\tfont-size          : 14px;\n\tcolor              : black;\n\tfont-family        : \"Plus Jakarta Sans Normal\", sans-serif !important;\n\tfont-optical-sizing: auto;\n\tfont-weight        : 600;\n\tfont-style         : normal;\n}\n\n\n\n.icon_column_layaout_disabilitas {\n\tdisplay        : flex;\n\tflex-direction : column;\n\talign-items    : center;\n\tjustify-content: center;\n\tmargin-left    : 10px;\n\tmargin-bottom  : 5px;\n}\n\n.text_column_layaout_disabilitas {\n\tdisplay       : flex;\n\tflex-direction: column;\n}\n\n.line_baris_fat_hul {\n\tdisplay      : none;\n\tbox-sizing   : border-box;\n\tbackground   : #000;\n\twidth        : 40vw !important;\n\tmin-width    : 200px !important;\n\tposition     : fixed !important;\n\theight       : 12px !important;\n\tborder       : solid 3px #fff300;\n\tborder-radius: 5px;\n\tz-index      : 999999999999999999999999;\n\tzoom         : 1 !important;\n}\n\n.line_baris_fat_hul_arrow {\n\tbottom   : 100%;\n\tleft     : 50%;\n\ttransform: translateX(-50%);\n\twidth    : 20px;\n\theight   : 0;\n\tposition : absolute;\n}\n\n.line_baris_fat_hul_arrow:before {\n\tborder-bottom-color: #fff300 !important;\n\tborder-width       : 17.5px !important;\n\tmargin-left        : -17px;\n}\n\n\n.line_baris_fat_hul_arrow:after,\n.line_baris_fat_hul_arrow:before {\n\tcontent       : \"\";\n\tbottom        : 100%;\n\tleft          : 50%;\n\tborder        : solid transparent;\n\theight        : 0;\n\twidth         : 0;\n\tposition      : absolute;\n\tpointer-events: none;\n}\n\n\n\n.line_baris_fat_hul_arrow:after {\n\tborder-bottom-color: #000;\n\tborder-width       : 14px;\n\tmargin-left        : -14px;\n}\n\n.opacity_screen1 {\n\tposition  : fixed !important;\n\tz-index   : 999999999999999999999999 !important;\n\twidth     : 100% !important;\n\tbackground: rgba(0, 0, 0, 0.5) !important;\n\ttop       : 0px !important;\n\n}\n\n.garis_screen1 {\n\twidth     : 100% !important;\n\theight    : 8px !important;\n\tposition  : absolute !important;\n\tbackground: rgb(0, 44, 176);\n\tbottom    : 0px !important;\n}\n\n\n\n.opacity_screen2 {\n\tposition  : fixed !important;\n\tz-index   : 999999999999999999999999 !important;\n\twidth     : 100% !important;\n\tbackground: rgba(0, 0, 0, 0.5) !important;\n\tbottom    : 0px !important;\n\n}\n\n.garis_screen2 {\n\twidth     : 100% !important;\n\theight    : 8px !important;\n\tposition  : absolute !important;\n\tbackground: rgb(0, 205, 136);\n\ttop       : 0px !important;\n}\n\n\n@font-face {\n\tfont-family  : 'Plus Jakarta Sans';\n\tfont-style   : normal;\n\tfont-weight  : 800;\n\tfont-display : swap;\n\tsrc          : url(https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_Tkn9QB_VIKg.woff2) format('woff2');\n\tunicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n\n@font-face {\n\tfont-family: 'OpenDyslexic Bold';\n\tfont-style : normal;\n\tfont-weight: normal;\n\tsrc        : url('https://raw.githubusercontent.com/fathulhudoyo/list-font-web/main/Dyseleksia.woff') format('woff');\n}\n\n\n@font-face {\n\tfont-family: 'Arial Serif';\n\tfont-style : normal;\n\tfont-weight: normal;\n\tsrc        : url('https://raw.githubusercontent.com/fathulhudoyo/list-font-web/main/Arial.ttf') format('truetype');\n}\n\n\n@font-face {\n\tfont-family  : 'Plus Jakarta Sans Normal';\n\tfont-style   : normal;\n\tfont-weight  : 500;\n\tsrc          : url(https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m079QB_VIKg.woff2) format('woff2');\n\tunicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n.content_aksesbilitas {\n\tposition        : fixed;\n\ttop             : 0;\n\tleft            : 0;\n\tz-index         : 999999999999;\n\theight          : 1px;\n\twidth           : -500px;\n\ttext-align      : center;\n\tbackground      : transparent !important;\n\tbackground-color: transparent !important;\n\t/* transition   : transform 0.3s ease-in-out;*/\n}\n\n.except_position_swipe {\n\tright: 0 !important;\n\tleft : unset;\n}\n\n.except_group_scroll_content {\n\n\tdirection: rtl;\n}\n\n.group_ltr_content {\n\twidth    : 490px;\n\tdirection: ltr;\n}\n\n.except_content_aksesbilitas_utama {\n\tborder-top-right-radius   : unset !important;\n\tborder-bottom-right-radius: unset !important;\n\tborder-top-left-radius    : 20px;\n\tborder-bottom-left-radius : 20px;\n}\n\n.content_aksesbilitas .except_groupcontenttoolbar {\n\ttransform : translateX(0px) !important;\n\ttransition: transform 0.6s;\n}\n\n.content_aksesbilitas.new-show-toolbar .except_groupcontenttoolbar {\n\ttransform: translateX(-500px) !important;\n\n}\n\n.content_aksesbilitas.new-show-toolbar .groupcontenttoolbar {\n\ttransform: translateX(0px);\n\n}\n\n.content_aksesbilitas .groupcontenttoolbar {\n\ttransform : translateX(-500px);\n\ttransition: transform 0.6s;\n}\n\n.groupcontenttoolbar {\n\tdisplay         : flex;\n\tflex-direction  : row;\n\theight          : 1px;\n\tbackground-color: transparent !important;\n\n}\n\n.content_aksesbilitas_utama {\n\tdisplay                   : flex;\n\tflex-direction            : column;\n\ttop                       : 0;\n\tz-index                   : 999999999999;\n\tposition                  : fixed;\n\tbackground-color          : " + bg_color_icon + ";\n\twidth                     : 500px;\n\theight                    : 100vh;\n\tborder-top-right-radius   : 20px;\n\tborder-bottom-right-radius: 20px;\n\tbox-shadow                : 0 0 5px rgba(0, 0, 0, 0.4);\n\t/* transition             : transform 0.3s ease-in-out;*/\n}\n\n.group_box_content_disabilitas {\n\tborder-top-right-radius: 20px;\n\tborder-top-left-radius : 20px;\n\twidth                  : 500px;\n\tposition               : absolute;\n\toverflow               : hidden;\n\tbottom                 : 0;\n\theight                 : 92vh;\n\tbackground-color       : #f0f1f5;\n}\n\n.group_scroll_content {\n\twidth     : 500px;\n\theight    : 100vh;\n\toverflow-y: scroll;\n\t/* Hide vertical scrollbar */\n\toverflow-x: hidden;\n\n\n}\n\n.group_scroll_content::-webkit-scrollbar {\n\twidth  : 5px;\n\tdisplay: inherit;\n}\n\n.group_scroll_content:hover::-webkit-scrollbar {\n\twidth: 5px;\n}\n\n.group_scroll_content::-webkit-scrollbar-track {\n\n\n\tbox-shadow           : inset 0 0 6px " + bg_color_icon + ";\n\tborder-radius        : 8px;\n\t-webkit-border-radius: 8px;\n\n\n}\n\n.group_scroll_content::-webkit-scrollbar-thumb {\n\tbackground-color     : " + bg_color_icon + ";\n\toutline              : 1px solid slategrey;\n\t-webkit-border-radius: 8px;\n\tborder-radius        : 8px;\n\tbackground           : " + bg_color_icon + ";\n\t-webkit-box-shadow   : inset 0 0 6px " + bg_color_icon + ";\n\n\n}\n\n.group_title_disabilitas {\n\tdisplay        : flex;\n\tflex-direction : column;\n\twidth          : 500px;\n\talign-items    : center;\n\tjustify-content: center;\n\theight         : 8vh;\n\tmargin-left    : 4%;\n}\n\n.title_disabilitas {\n\tcolor              : white;\n\tfont-size          : 18px;\n\tfont-family        : \"Plus Jakarta Sans\", sans-serif !important;\n\tfont-optical-sizing: auto;\n\tfont-weight        : 700;\n\tfont-style         : normal;\n}\n\n.row_title_disabilitas {\n\tdisplay       : flex;\n\tflex-direction: row;\n\talign-items   : center;\n\theight        : 60px;\n\toverflow      : hidden;\n\twidth         : 95%;\n}\n\n.start_title_disabilitas {\n\tdisplay       : flex;\n\tflex-direction: column;\n\twidth         : max-content;\n\talign-items   : flex-start;\n\twidth         : 65%;\n\n}\n\n.end_title_disabilitas {\n\tdisplay       : flex;\n\tflex-direction: column;\n\twidth         : 30%;\n\talign-items   : flex-end;\n\n}\n\n.box_circle_disabilitas {\n\twidth           : 30px;\n\theight          : 30px;\n\tdisplay         : flex;\n\ttext-align      : center;\n\tpadding-right   : 1%;\n    padding-bottom   : 1%;\n\tflex-direction  : column;\n\talign-items     : center;\n\tjustify-content : center;\n\tborder-radius   : 30px;\n\tbackground-color: rgba(0, 0, 0, .36);\n\tcursor          : pointer;\n}\n\n.icon_x_svg_color {\n\tfill       : white;\n\tfont-weight: bold;\n\tfont-size  : 10px;\n\twidth      : 10px;\n}\n\n\n.svg_icon_layout_dsb {\n\t\"width : 28px;\nheight  : 28px;\n\tdisplay: flex;\n\n}\n\n.group_action_bahasa[aria-expanded=true] .icon_column_layaout_disabilitas {\n\ttransform: rotate(90deg);\n}\n\n.box_content_disabilitas {\n\twidth           : 25px;\n\theight          : 25px;\n\tdisplay         : flex;\n\ttext-align      : center;\n\tflex-direction  : column;\n\talign-items     : center;\n\tjustify-content : center;\n\tborder-radius   : 25px;\n\tbackground-color: " + bg_color_icon + ";\n\tcursor          : pointer;\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n}\n\n.box_content_profile_disabilitas {\n\twidth           : 25px;\n\theight          : 25px;\n\tdisplay         : flex;\n\ttext-align      : center;\n\tflex-direction  : column;\n\talign-items     : center;\n\tjustify-content : center;\n\tborder-radius   : 25px;\n\tbackground-color: white;\n\tcolor           : black;\n\tcursor          : pointer;\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n}\n\n.text_list_content_profile_disabilitas {\n\tdisplay            : flex;\n\tflex-direction     : column;\n\tmargin-left        : 10px;\n\tfont-size          : 12px;\n\tcolor              : black;\n\tfont-family        : \"Plus Jakarta Sans Normal\", sans-serif !important;\n\tfont-optical-sizing: auto;\n\tfont-weight        : 600;\n\tfont-style         : normal;\n}\n\n.active_text_list_content_profile_disabilitas {\n\tcolor: white;\n}\n\n.icon_list_content_profile_disabilitas {\n\twidth           : 30px;\n\theight          : 30px;\n\tdisplay         : flex;\n\ttext-align      : center;\n\tflex-direction  : column;\n\talign-items     : center;\n\tjustify-content : center;\n\tborder-radius   : 30px;\n\tbackground-color: rgba(216, 216, 216, .4);\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n\tcursor          : pointer;\n\toverflow        : hidden;\n}\n\n.active_icon_list_content_profile_disabilitas {\n\n\tbackground-color: black;\n}\n\n.layout_content_title {\n\tdisplay       : flex;\n\tflex-direction: column;\n\tborder-bottom : 1px solid #b4bfd0;\n\tpadding-top   : 15px;\n\tpadding-left  : 20px;\n\tpadding-bottom: 15px;\n}\n\n.group_action_bahasa {\n\tdisplay       : flex;\n\twidth         : max-content;\n\tflex-direction: row;\n\tcursor        : pointer;\n}\n\n.name_id {\n\tcolor      : white;\n\tfont-weight: bold;\n\tfont-size  : 12px;\n}\n\n.box_name_menu_disabilitas {\n\tdisplay            : flex;\n\tflex-direction     : column;\n\tmargin-left        : 10px;\n\tfont-size          : 14px;\n\tcolor              : black;\n\tfont-family        : \"Plus Jakarta Sans Normal\", sans-serif !important;\n\tfont-optical-sizing: auto;\n\tfont-weight        : 600;\n\tfont-style         : normal;\n\n}\n\n.box_button_switch {\n\tdisplay       : flex;\n\tflex-direction: column;\n\talign-items   : flex-end;\n\tfont-weight   : bolder;\n\tcolor         : red;\n\tfont-family   : \"Plus Jakarta Sans Normal\", sans-serif !important;\n\tfont-size     : 12px;\n\tmargin-left   : 10px;\n}\n\n.content_daftar_action_disabilitas {\n\tdisplay       : flex;\n\tflex-direction: column;\n\twidth         : 95%;\n\tpadding-top   : 15px;\n\tpadding-left  : 20px;\n\n}\n\n\n.layout_grid_disabilitas {\n\tdisplay              : inline-grid;\n\tgrid-template-columns: auto auto auto;\n\talign-items          : center;\n\tjustify-content      : center;\n\tgap                  : 18px 10px;\n}\n\n\n\n.box_group_disabilitas {\n\tborder-radius   : 15px;\n\twidth           : 150px;\n\theight          : 125px;\n\tborder          : 1px solid transparent;\n\tcursor          : pointer;\n\toverflow        : hidden;\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n\tbackground-color: white;\n}\n\n.box_group_disabilitas:hover {\n\tborder-radius: 15px;\n\twidth        : 150px;\n\theight       : 125px;\n\tborder       : 2px solid " + bg_color_icon + ";\n\tcursor       : pointer;\n\tbox-shadow   : 0 0 5px rgba(0, 0, 0, 0.4);\n}\n\n.box_icon_disabilitas {\n\tdisplay        : flex;\n\tflex-direction : column;\n\talign-items    : center;\n\tjustify-content: center;\n\theight         : 80px;\n}\n\n.box_text_bottom_disabilitas {\n\ttext-align         : center;\n\tfont-size          : 12px;\n\tcolor              : black;\n\tfont-family        : \"Plus Jakarta Sans\", sans-serif !important;\n\tfont-optical-sizing: auto;\n\tfont-weight        : 600;\n\tfont-style         : normal;\n}\n\n.box_column_action_strip {\n\tdisplay        : flex;\n\tflex-direction : column;\n\tjustify-content: center;\n\twidth          : 100%;\n\tmargin-top     : 2%;\n}\n\n.box_row_action_strip {\n\tdisplay        : flex;\n\tflex-direction : row;\n\tjustify-content: center;\n\twidth          : 100%;\n\tmargin-top     : 2%;\n}\n\n\n.strip_loading_process_v2 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\twidth           : 30%;\n\theight          : 5px;\n\tmargin-right    : 5px;\n\tborder-radius   : 5px;\n\tbackground-color: " + bg_color_icon + ";\n}\n\n.strip_loading_unprocess_v2 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\twidth           : 30%;\n\theight          : 5px;\n\topacity         : 0.5;\n\tmargin-right    : 5px;\n\tborder-radius   : 5px;\n\tbackground-color: " + bg_color_icon + ";\n}\n\n.strip_loading_process_v3 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\twidth           : 25%;\n\theight          : 5px;\n\tmargin-right    : 5px;\n\tborder-radius   : 5px;\n\tbackground-color: " + bg_color_icon + ";\n}\n\n.strip_loading_unprocess_v3 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\twidth           : 25%;\n\theight          : 5px;\n\topacity         : 0.5;\n\tmargin-right    : 5px;\n\tborder-radius   : 5px;\n\tbackground-color: " + bg_color_icon + ";\n}\n\n.strip_loading_process_v4 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\twidth           : 15%;\n\theight          : 5px;\n\tmargin-right    : 5px;\n\tborder-radius   : 5px;\n\tbackground-color: " + bg_color_icon + ";\n}\n\n.strip_loading_unprocess_v4 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\twidth           : 15%;\n\theight          : 5px;\n\topacity         : 0.5;\n\tmargin-right    : 5px;\n\tborder-radius   : 5px;\n\tbackground-color: " + bg_color_icon + ";\n}\n\n.icon_svg_color {\n\tfill       : black;\n\tfont-weight: bold;\n\tfont-size  : 10px;\n\twidth      : 10px;\n}\n\n.icon_svg_sroke_color {\n\tfill           : none;\n\tstroke         : black;\n\tstroke-linecap : round;\n\tstroke-linejoin: round;\n}\n\n.icon_svg_grey_scale_color_1 {\n\tfill       : black;\n\tfont-weight: bold;\n\tfont-size  : 10px;\n\twidth      : 10px;\n}\n\n.icon_svg_grey_scale_color_2 {\n\tfill          : #231f20;\n\topacity       : 0.08;\n\tmix-blend-mode: darken;\n}\n\n.icon_svg_grey_scale_color_3 {\n\tfill: grey;\n}\n\n.icon_svg_grey_scale_color_4 {\n\tfill   : #fff;\n\topacity: 0.15\n}\n\n.icon_contrast_white {\n\tfill           : white;\n\tstroke         : " + bg_color_icon + ";\n\tstroke-linejoin: round;\n\tstroke-width   : 32px\n}\n\n.icon_contrast_black {\n\t/*   fill: black;\n                stroke: none;*/\n\tfill  : " + bg_color_icon + ";\n\tstroke: " + bg_color_icon + ";\n\n}\n\n\n\n.icon_fill_svg_color_black {\n\tfill: black;\n}\n\n.icon_fill_svg_color_white {\n\tfill: white;\n}\n\n.active_icon_fill_svg_color_black {\n\tfill: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .icon_fill_svg_color_black {\n\tfill: " + bg_color_icon + ";\n}\n\n\n.box_group_disabilitas:hover .icon_svg_grey_scale_color_1 {\n\tfill: black;\n}\n\n.box_group_disabilitas:hover .icon_svg_grey_scale_color_2 {\n\tfill: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .icon_svg_grey_scale_color_3 {\n\tfill: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .icon_svg_grey_scale_color_4 {\n\tfill: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .icon_svg_color {\n\tfill: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .icon_svg_sroke_color {\n\tfill  : " + bg_color_icon + ";\n\tstroke: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .box_text_bottom_disabilitas {\n\tcolor: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .icon_contrast {\n\tfill: " + bg_color_icon + ";\n}\n\n.active_box_menu_disabilitas {\n\tborder: 2px solid " + bg_color_icon + ";\n}\n\n.active_icon_svg_sroke_color {\n\tfill  : " + bg_color_icon + ";\n\tstroke: " + bg_color_icon + ";\n}\n\n.active_box_text_bottom_disabilitas {\n\tcolor: " + bg_color_icon + ";\n}\n\n.active_icon_svg_color {\n\tfill: " + bg_color_icon + ";\n}\n\n\n.active_icon_svg_grey_scale_color_1 {\n\tfill: black;\n}\n\n.active_icon_svg_grey_scale_color_2 {\n\tfill: " + bg_color_icon + ";\n}\n\n.active_icon_svg_grey_scale_color_3 {\n\tfill: " + bg_color_icon + ";\n}\n\n.active_icon_svg_grey_scale_color_4 {\n\tfill: " + bg_color_icon + ";\n}\n\n\n.circle_multi {\n\tfill             : none;\n\tstroke           : black;\n\tstroke-width     : 2;\n\tstroke-linecap   : round;\n\tstroke-linejoin  : round;\n\tstroke-miterlimit: 10;\n}\n\n.circle_single {\n\tfill             : none;\n\tstroke           : black;\n\tstroke-width     : 2;\n\tstroke-linecap   : round;\n\tstroke-linejoin  : round;\n\tstroke-miterlimit: 10;\n}\n\n.box_group_disabilitas:hover .circle_multi {\n\tstroke: " + bg_color_icon + ";\n}\n\n.box_group_disabilitas:hover .circle_single {\n\tstroke: " + bg_color_icon + ";\n}\n\n.active_circle_single {\n\tstroke: " + bg_color_icon + ";\n}\n\n.active_circle_multi {\n\tstroke: " + bg_color_icon + ";\n}\n\n.group_row_widget_dsb {\n\tdisplay       : flex;\n\tflex-direction: row;\n}\n\n.layout_profile_widget {\n\tdisplay       : none;\n\tflex-direction: column;\n\theight        : max-height;\n\twidth         : 500px;\n\n}\n\n.layout_settings_widget {\n\tdisplay       : none;\n\tflex-direction: column;\n\theight        : max-height;\n    width:100%;\n\tmargin-bottom : 2vh;\n    align-items : center;\n}\n\n.box_profile_aksesbilitas {\n\tdisplay         : flex;\n\tflex-direction  : row;\n\tborder-radius   : 15px;\n\twidth           : 215px;\n\theight          : 55px;\n\tborder          : 1px solid transparent;\n\tcursor          : pointer;\n\toverflow        : hidden;\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n\tbackground-color: white;\n\n\talign-items : center;\n\tpadding-left: 1vw;\n}\n\n.color_svg_content_profile_disabilitas {\n\tcolor: black;\n}\n\n.active_color_svg_content_profile_disabilitas {\n\tcolor: white;\n}\n\n.active_box_profile_aksesbilitas {\n\tbackground-color: " + bg_color_icon + "\n}\n\n.box_profile_aksesbilitas:hover {\n\tbackground-color: " + bg_color_icon + "\n}\n\n.box_profile_aksesbilitas:hover .text_list_content_profile_disabilitas {\n\tcolor: white;\n}\n\n.box_profile_aksesbilitas:hover .text_list_content_profile_disabilitas {\n\tcolor: white;\n}\n\n.box_profile_aksesbilitas:hover .color_svg_content_profile_disabilitas {\n\tcolor: white;\n}\n\n.box_profile_aksesbilitas:hover .box_content_profile_disabilitas {\n\tcolor: rgba(0, 107, 230);\n}\n\n.box_profile_aksesbilitas:hover .icon_list_content_profile_disabilitas {\n\tbackground-color: black;\n}\n\n.box_profile_aksesbilitas:hover .fill_icon_dsb {\n\tfill: white;\n}\n\n.active_fill_icon_dsb {\n\tfill: white;\n}\n\n\n.row_widget_profil_dsb {\n\tmargin-top           : 3%;\n\tdisplay              : inline-grid;\n\tgrid-template-columns: auto auto;\n\talign-items          : center;\n\tjustify-content      : center;\n\tgap                  : 18px 20px;\n\tmargin-bottom        : 1%;\n}\n\n.layout_bahasa_widget {\n\tdisplay       : none;\n\tflex-direction: column;\n\theight        : 250px;\n\twidth         : 500px;\n\n\toverflow: scroll;\n}\n\n.layout_bahasa_widget_active {\n\tdisplay       : flex;\n\tflex-direction: column;\n\n}\n\n.group_title_bahasa {\n\tdisplay       : flex;\n\tflex-direction: column;\n\twidth         : 100%;\n\tborder-bottom : 1px solid #b4bfd0;\n}\n\n.title_daftar_bahasa {\n\tdisplay       : flex;\n\tflex-direction: column;\n\ttext-align    : center;\n\tfont-size     : 18px;\n\tpadding-top   : 15px;\n\tpadding-bottom: 15px;\n\tfont-family   : 'Plus Jakarta Sans' !important;\n\tfont-weight   : bolder;\n\tcolor         : black;\n\n\n}\n\n.hidden_svg {\n\tdisplay: none;\n}\n\n.group_action_setting_layout[aria-expanded=true] .icon_column_layaout_disabilitas {\n\ttransform: rotate(90deg);\n}\n\n.row_data_setting_layout {\n\tdisplay       : flex;\n\tflex-direction: column;\n    width:100%;\n\tborder-bottom : 1px solid #b4bfd0;\n\tpadding-bottom: 1vh;\n\tmargin-bottom : 6vh;\n\tdirection     : ltr !important;\n}\n\n.group_action_setting_layout {\n\twidth         : max-content;\n\tdisplay       : flex;\n\tflex-direction: row;\n\tpadding-bottom: 1vh;\n\tpadding-left  : 15px;\n\tcursor        : pointer;\n}\n.except_group_action_setting_layout{\n   margin-left: 2%;\n}\n.column_reset_disabilitas_menu {\n\tdisplay        : flex;\n\tflex-direction : column;\n\talign-items    : center;\n\tjustify-content: center;\n\twidth          : 100%;\n\theight         : 100px;\n\tmargin-bottom  : 2vh;\n}\n\n.column_cek_version_dsb {\n\tdisplay        : flex;\n\tflex-direction : column;\n\talign-items    : center;\n\tjustify-content: center;\n\twidth          : 100%;\n\theight         : 50px;\n\tmargin-top     : -5vh;\n\tmargin-bottom  : 20vh;\n}\n\n.column_cek_creator {\n\tdisplay       : flex;\n\tflex-direction: column;\n\tfont-family   : 'Plus Jakarta Sans' !important;\n\tfont-weight   : bolder;\n\tfont-size     : 8px;\n\tcolor         : black;\n\tmargin-left   : 5px;\n\theight        : max-content;\n\n}\n\n.row_column_creator {\n\tdisplay        : flex;\n\tflex-direction : row;\n\twidth          : 100%;\n\toverflow       : hidden;\n\theight         : 20px;\n\tmargin-top     : 7vh;\n\tmargin-bottom  : 6vh;\n\tjustify-content: flex-end;\n}\n\n.creator_widget {\n\tdisplay       : flex;\n\tflex-direction: column;\n\tfont-family   : 'Plus Jakarta Sans' !important;\n\tfont-weight   : bold;\n\tfont-size     : 8px;\n\tcolor         : grey;\n}\n\n.column_text_cek_version_dsb {\n\tdisplay       : flex;\n\tflex-direction: column;\n\twidth         : 90%;\n\tfont-family   : 'Plus Jakarta Sans' !important;\n\tfont-weight   : bolder;\n\tfont-size     : 14px;\n\tcolor         : black;\n\ttext-align    : center;\n}\n\n\n.row_persegi_reset {\n\tdisplay         : flex;\n\tflex-direction  : row;\n\tbackground-color: " + bg_color_icon + ";\n\theight          : 50px;\n\twidth           : 450px;\n\tjustify-content : center;\n\talign-items     : center;\n\tborder-radius   : 20px;\n\tbox-shadow      : 0 0 5px rgba(0, 0, 0, 0.4);\n\tcursor          : pointer;\n}\n\n.icon_persegi_riset {\n\tdisplay        : flex;\n\tflex-direction : column;\n\twidth          : max-content;\n\tjustify-content: flex-start;\n\tmargin-left    : 10px\n}\n\n.column_text_persegi_riset {\n\tdisplay       : flex;\n\tflex-direction: column;\n\twidth         : 90%;\n\tfont-family   : 'Plus Jakarta Sans' !important;\n\tfont-weight   : bolder;\n\tfont-size     : 16px;\n\tcolor         : white;\n}\n\n\n.circle_aksesbilitas_popup {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\tbottom          : 0;\n\tz-index         : 999999999999;\n\tposition        : fixed;\n\tleft            : 0;\n\tbackground-color: " + bg_color_icon + ";\n    width: 80px;\n    height: 80px;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    border-radius: 80px;\n    margin-top:0px;\n    margin-bottom: 20px;\n    margin-left: 20px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n}\n\n.circle_right_top_sidebar {\n\tright        : 0;\n\ttop          : 0;\n\tmargin-left  : 0px !important;\n\tleft         : unset;\n\tbottom       : unset;\n\tmargin-top   : 20px !important;\n\tmargin-left  : 0px !important;\n\tmargin-bottom: 0px !important;\n\tmargin-right : 20px !important;\n}\n\n.circle_left_top_sidebar {\n\ttop          : 0;\n\tleft         : 0;\n\tright        : unset;\n\tbottom       : unset;\n\tmargin-top   : 20px !important;\n\tmargin-left  : 20px !important;\n\tmargin-bottom: 0px !important;\n\tmargin-right : 0px !important;\n}\n\n.circle_right_sidebar {\n\tright        : 0;\n\tbottom       : 0;\n\tleft         : unset;\n\tmargin-top   : 0px !important;\n\tmargin-left  : 0px !important;\n\tmargin-bottom: 20px !important;\n\tmargin-right : 20px !important;\n}\n\n.circle_aksesbilitas_2 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\tbackground-color: white;\n\talign-items     : center;\n\tjustify-content : center;\n\twidth           : 66px;\n\theight          : 67px;\n\tborder-radius   : 67px;\n}\n\n.circle_aksesbilitas_3 {\n\tdisplay         : flex;\n\tflex-direction  : column;\n\tbackground-color: " + bg_color_icon + ";\n\twidth           : 59px;\n\theight          : 60px;\n\tborder-radius   : 55px;\n\talign-items     : center;\n\tjustify-content : center;\n}\n\n\n.circle_aksesbilitas_popup:hover {\n\twidth        : 85px;\n\theight       : 85px;\n\tborder-radius: 85px;\n}\n\n.circle_aksesbilitas_popup:hover .circle_aksesbilitas_2 {\n\twidth        : 71px;\n\theight       : 72px;\n\tborder-radius: 72px;\n}\n\n.circle_aksesbilitas_popup:hover .circle_aksesbilitas_3 {\n\twidth        : 64px;\n\theight       : 65px;\n\tborder-radius: 60px;\n}\n\n.svg_icon_popoup_dsb {\n\tfill: white;\n}\n\n.cursor_website_all {\n\tcursor: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width='60px' height='60px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath style=' stroke: black; stroke-width: 2;' d='M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z' fill='%23ffffff'/%3E%3C/svg%3E\"), pointer !important;\n\n}\n\n.group_body_bahasa {\n\tdisplay       : flex;\n\tflex-direction: column;\n}\n\n\n\n\n/*on*/\n\n.change-navbar-website {\n\tbackground-color: rgb(0, 0, 0) !important;\n}\n\n.kontras_2_bg_black_yellow {\n\tbackground-color: black !important;\n\tbackground      : black !important;\n\tcolor           : yellow !important;\n}\n\n.kontras_2_bg_href {\n\tcolor: #00f3f7 !important;\n}\n\n.kontras_2_bg_black_green {\n\tbackground-color: black !important;\n\tbackground      : black !important;\n\tcolor           : #40C090 !important;\n}\n\n.kontras_2_underline_1 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: black !important;\n}\n\n.kontras_2_underline_2 {\n\ttext-decoration      : underline !important;\n\tbackground-color     : black !important;\n\tbackground           : black !important;\n\tcolor                : yellow !important;\n\ttext-decoration-color: yellow !important;\n}\n\n.kontras_2_border {\n\tborder-color: white !important;\n}\n\n.kontras_3_bg_black_yellow {\n\tbackground-color: black !important;\n\tbackground      : black !important;\n\tcolor           : yellow !important;\n}\n\n.kontras_3_underline_1 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: yellow !important;\n}\n\n.kontras_3_underline_2 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: yellow !important;\n\tbackground-color     : black !important;\n\tbackground           : black !important;\n\tcolor                : yellow !important;\n}\n\n\n\n.kontras_4_bg_black_white {\n\tbackground-color: white !important;\n\tbackground      : white !important;\n\tcolor           : black !important;\n}\n\n.kontras_4_underline_1 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: yellow !important;\n}\n\n.kontras_4_underline_2 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: yellow !important;\n\tbackground-color     : black !important;\n\tbackground           : black !important;\n\tcolor                : yellow !important;\n}\n\n.kontras_4_border {\n\tborder-color: black !important;\n}\n\n.rata_column_kiri_widget {\n\tjustify-content: flex-start !important;\n}\n\n.rata_column_tengah_widget {\n\tjustify-content: center !important;\n}\n\n.rata_column_kanan_widget {\n\tjustify-content: flex-end !important;\n}\n\n.rata_text_kiri_widget {\n\ttext-align: left !important;\n}\n\n.rata_text_tengah_widget {\n\ttext-align: center !important;\n}\n\n.rata_text_kanan_widget {\n\ttext-align: right !important;\n}\n\n\n.rata_column_kanan_kiri_text_widget {\n\ttext-align     : justify !important;\n\ttext-justify   : inter-word !important;\n\tjustify-content: \"\" !important;\n}\n\n.underline_link_1 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: black !important;\n}\n\n.underline_link_1_kontras {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: yellow !important;\n}\n\n.underline_link_2 {\n\ttext-decoration      : underline !important;\n\ttext-decoration-color: yellow !important;\n\tbackground-color     : black !important;\n\tbackground           : black !important;\n\tcolor                : yellow !important;\n}\n\n\n\n[data-tooltip] {\n\t--arrow-size: 5px;\n\tposition    : relative;\n\tz-index     : 999;\n}\n\n\n[data-tooltip]:before,\n[data-tooltip]:after {\n\tposition      : absolute;\n\tvisibility    : hidden;\n\topacity       : 0;\n\tleft          : 50%;\n\tbottom        : 0;\n\tpointer-events: none;\n\ttransition    : 0.2s;\n\twill-change   : transform;\n\ttext-align    : center !important;\n}\n\n\n\n[data-tooltip]:before {\n\tcontent         : attr(data-tooltip);\n\tpadding         : 10px 18px;\n\tmin-width       : 50px !important;\n\tmax-width       : 300px !important;\n\twidth           : max-content !important;\n\tborder-radius   : 6px !important;\n\tfont-size       : 14px !important;\n\tbackground-color: rgba(59, 72, 80, 0.9) !important;\n\tbackground-image: linear-gradient(30deg,\n\t\t\trgba(59, 72, 80, 0.44),\n\t\t\trgba(59, 68, 75, 0.44),\n\t\t\trgba(60, 82, 88, 0.44)) !important;\n\tbox-shadow : 0px 0px 24px rgba(0, 0, 0, 0.2) !important;\n\tcolor      : #fff !important;\n\ttext-align : center !important;\n\twhite-space: pre-wrap !important;\n\ttransform  : translate(-50%, calc(0px - var(--arrow-size))) scale(0.5) !important;\n}\n\n/* Tooltip arrow */\n[data-tooltip]:after {\n\tcontent            : '';\n\tborder-style       : solid !important;\n\tborder-width       : var(--arrow-size) var(--arrow-size) 0px var(--arrow-size);\n\t/* CSS triangle */\n\tborder-color       : rgba(55, 64, 70, 0.9) transparent transparent transparent;\n\ttransition-duration: 0s;\n\ttransform-origin   : top;\n\ttransform          : translateX(-50%) scaleY(0) !important;\n}\n\n/* Tooltip becomes visible at hover */\n[data-tooltip]:hover:before,\n[data-tooltip]:hover:after {\n\tvisibility: visible !important;\n\topacity   : 1 !important;\n}\n\n/* Scales from 0.5 to 1 -> grow effect */\n[data-tooltip]:hover:before {\n\ttransition-delay: 0.3s !important;\n\ttransform       : translate(-50%, calc(0px - var(--arrow-size))) scale(0.8) !important;\n}\n\n\n.tooltip_data_move_mouse_new {\n\tdisplay       : flex;\n\tvisibility    : hidden;\n\tposition      : absolute;\n\tflex-direction: column;\n\tz-index       : 999999999999999999999999999;\n\ttext-align    : center !important;\n\tfont-weight   : bold;\n\tmin-width     : 50px !important;\n\tmax-width     : 500px !important;\n\n\tborder-radius   : 6px !important;\n\tfont-size       : 14px !important;\n\tbackground-color: rgba(59, 72, 80, 0.9) !important;\n\tbackground-image: linear-gradient(30deg,\n\t\t\trgba(59, 72, 80, 0.44),\n\t\t\trgba(59, 68, 75, 0.44),\n\t\t\trgba(60, 82, 88, 0.44)) !important;\n\tbox-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2) !important;\n\tcolor     : #fff !important;\n\tpadding   : 10px 18px;\n}\n\n.main_web_ppid_jogja {\n\tanimation-duration: 1.5s !important;\n\topacity           : 1 !important;\n}\n\n@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {\n\n\t.group_title_disabilitas {\n\t\theight     : 12vh;\n\t\tmargin-left: 4%;\n\t}\n\n\t.group_box_content_disabilitas {\n\t\twidth : 500px;\n\t\theight: 88vh;\n\t}\n\n\t.group_scroll_content {\n\t\twidth : 500px;\n\t\theight: 88vh;\n\t}\n}\n\n@media only screen and (max-width: 900px) {\n.except_group_move_widget {\n    background-color: white;\n    margin-left: 5px  !important;\n    margin-right: 0px;\n    padding-top: 15px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 15px;\n    margin-top: 5px;\n    width: 90%;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);\n}\n.except_group_action_setting_layout{\n   margin-left: 1%  !important;\n}\n\n\t.group_action_setting_layout {\n\t\tpadding-bottom: 2vh;\n\n\t}\n.column_cek_version_dsb{\n    margin-top: -2vh; \n    margin-bottom: 20vh;\n}\n\t.box_profile_aksesbilitas {\n\t\tpadding-left   : 2vw;\n\t\tjustify-content: flex-start;\n\t\twidth          : 45vw;\n\t}\n\n\t.except_layout_profile_widget {\n\t\twidth: 100vw !important;\n\n\t}\n\n\t.except_group_scroll_content {\n\t\twidth: max-content !important;\n\t}\n\n\n\t.text_list_content_profile_disabilitas {\n\n\t\ttext-align: left;\n\t}\n\n\t.row_widget_profil_dsb {\n\n\t\tgap: 20px 10px;\n\n\t}\n\n\t.layout_settings_widget {\n\n\t\twidth: 98vw !important;\n\n\t}\n\n\t.layout_profile_widget {\n\n\t\twidth: 100vw !important;\n\n\t}\n\n\t.display_none_mobile {\n\t\tdisplay: none;\n\t}\n\n\t.circle_aksesbilitas_popup {\n\t\tmargin-top: 20%;\n\t}\n\n\t.column_reset_disabilitas_menu {\n\t\twidth        : 100vw;\n\t\tmargin-bottom: 1vh;\n\t}\n\n\t.row_persegi_reset {\n\t\twidth        : 90vw;\n\t\tpadding-left : 5%;\n\t\tpadding-right: 5%;\n\n\t}\n\n\t.column_text_persegi_riset {\n\t\tfont-size: 12px;\n\t\twidth    : 100%;\n\t}\n\n\t.content_aksesbilitas {\n\t\twidth: -100vw;\n\t}\n\n\t.content_daftar_action_disabilitas {\n\t\twidth       : 98vw;\n\t\tpadding-left: 0px;\n\t}\n\n\t.except_content_daftar_action_disabilitas {\n\t\twidth: 98vw;\n\t}\n\n\t.box_text_bottom_disabilitas {\n\t\tfont-size  : 12px;\n\t\tline-height: 1.5em;\n\t}\n\n\t.box_group_disabilitas {\n\t\twidth: 45vw !important;\n\n\t}\n\n\t.active_box_menu_disabilitas {\n\t\twidth: 45vw !important;\n\t}\n\n\t.content_aksesbilitas .groupcontenttoolbar {\n\t\ttransform : translateX(-100vw);\n\t\ttransition: transform 0.6s;\n\t}\n\n\t.content_aksesbilitas.new-show-toolbar .groupcontenttoolbar {\n\t\ttransform: translateX(0vw);\n\n\t}\n\n\t.content_aksesbilitas .except_groupcontenttoolbar {\n\t\ttransform : translateX(0vw) !important;\n\t\ttransition: transform 0.6s;\n\t}\n\n\t.content_aksesbilitas.new-show-toolbar .except_groupcontenttoolbar {\n\t\ttransform: translateX(-100vw) !important;\n\n\t}\n\n\n\n\t.content_aksesbilitas_utama {\n\t\twidth        : 100vw;\n\t\theight       : calc(" + pageHeight_website + "px + 20vh);\n\t\t/* transition: transform 0.3s ease-in-out;*/\n\t}\n\n\n\t.layout_bahasa_widget {\n\t\twidth: 100vw;\n\t}\n\n\n\t.end_title_disabilitas {\n\t\talign-items : flex-end;\n\t\twidth       : 30vw;\n\t\tmargin-right: 10px;\n\n\t}\n\n\t.layout_grid_disabilitas {\n\t\tdisplay              : inline-grid;\n\t\tgrid-template-columns: auto auto;\n\t\talign-items          : center;\n\t\tjustify-content      : center;\n\t\tgap                  : 18px 10px;\n\t}\n\n\t.group_box_content_disabilitas {\n\n\t\twidth : 100vw;\n\t\theight: calc(" + pageHeight_website + "px + 10vh);\n\n\t}\n\n\t.group_scroll_content {\n\t\twidth : 100vw;\n\t\theight: 100vh;\n\t}\n\n\t.box_name_menu_disabilitas {\n\t\ttext-align : left;\n\t\tmargin-left: 10px;\n\t\tfont-size  : 14px;\n\n\t}\n\n\t.layout_content_title {\n\n\t\twidth: 100%;\n\t}\n\n\t.row_title_disabilitas {\n\t\twidth: 100vw;\n\t}\n\n\t.title_disabilitas {\n\t\twidth    : max-content;\n\t\tfont-size: 16px;\n\t}\n\n\t.start_title_disabilitas {\n\n\t\twidth: 60vw;\n\n\n\t}\n\n\t.group_title_disabilitas {\n\t\twidth      : 100vw;\n\t\theight     : 10vh;\n\t\tmargin-left: 4%;\n\t}\n";
localStorage.removeItem("permismobile");
localStorage.removeItem("permisvoice");
var audio;
var interval_animate_widget = 0;
var action_text_besar = [];
var action_text_kecil = [];
var action_contrash_widget = [];
var action_tooltip_widget = [];
var action_perataan_text_widget = [];
var action_line_height_text_widget = [];
var action_space_text_widget = [];
var action_kursor_widget = [];
var action_garis_bawahi_tautan_widget = [];
var cek_action_sound_search = [];
var tampung_text = [];
var action_tulisan_dibaca = [];
var action_grey_scale_widget = [];
var list_id_action_profile_aksesbilitas = ["action_gangguan_motorik", "action_netra_total", "action_buta_warna", "action_disleksia", "action_gangguan_pengelihatan", "action_kognitif_pembelajaran", "action_kejang_dan_epilepsi", "action_adhd"];
var head = document.head || document.getElementsByTagName("head")[0];
if (!(typeof jQuery === "function")) {
  var script_jquery = document.createElement("script");
  script_jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
  script_jquery.type = "text/javascript";
  document.body.appendChild(script_jquery);
}
var api_key_revoice = '';
if (cek_attr_resvoice.length > 0) {
  api_key_revoice = cek_attr_resvoice[0];
  var script_voice = document.createElement("script");
  script_voice.src = "https://code.responsivevoice.org/responsivevoice.js?key=" + api_key_revoice;
  script_voice.type = "text/javascript";
  document.body.appendChild(script_voice);
}
var script_jqueryx = document.createElement("script");
script_jqueryx.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
script_jqueryx.type = "text/javascript";
document.body.appendChild(script_jqueryx);
var script_google_anal = document.createElement("script");
script_google_anal.src = "https://www.googletagmanager.com/gtag/js?id=UA-96355266-1";
script_google_anal.type = "text/javascript";
document.body.appendChild(script_google_anal);
var script_google_anal_v2 = document.createElement("script");
script_google_anal_v2.src = "https://www.googletagmanager.com/gtag/js?id=G-SJLG49CX7N";
script_google_anal_v2.type = "text/javascript";
document.body.appendChild(script_google_anal_v2);
var style = document.createElement("style");
head.appendChild(style);
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = css_loader;
} else {
  style.appendChild(document.createTextNode(css_loader));
}
var create_div_element = document.createElement("div");
create_div_element.setAttribute('id', "new_load_disabilitas");
document.body.appendChild(create_div_element);
if (base_url_website == "ppid.slemankab.go.id") {
  var main_class_wrap = document.getElementById("wrapper");
  main_class_wrap.classList.add("main_web_ppid_jogja");
}
var create_slider_dsb_element = document.createElement("div");
create_slider_dsb_element.setAttribute('id', "slider_dsb_element");
document.body.appendChild(create_slider_dsb_element);
var create_slider_mouse = document.createElement("div");
create_slider_mouse.setAttribute('id', "slider_mouse_over");
document.body.appendChild(create_slider_mouse);
var create_slider_mouse_masked = document.createElement("div");
create_slider_mouse_masked.setAttribute('id', "slider_mouse_masked");
document.body.appendChild(create_slider_mouse_masked);
var create_slider_mouse_masked_line = document.createElement("div");
create_slider_mouse_masked_line.setAttribute('id', "slider_mouse_masked_line");
document.body.appendChild(create_slider_mouse_masked_line);
var interval_cek_element = 0;
if (document.readyState == "complete") {
  setTimeout(() => {
    interval_cek_element = setInterval(cek_fungsi_jquery, 100);
  }, 200);
} else {
  window.addEventListener("load", function () {
    setTimeout(() => {
      interval_cek_element = setInterval(cek_fungsi_jquery, 100);
    }, 2000);
  }, false);
}
function cek_fungsi_jquery() {
  var _0x2e0c6c = document.getElementById("new_load_disabilitas");
  const _0x389a57 = ["www.google.com"];
  if (new RegExp("\\b" + _0x389a57.join("\\b|\\b") + "\\b").test(base_url_website)) {} else {
    var _0x43f546 = document.body.contains(_0x2e0c6c);
    if (_0x43f546) {
      jquery_cek_all();
      setTimeout(() => {
        clearInterval(interval_cek_element);
        cek_local_function();
        hit_api_tracking(base_url_website, "no_data");
        load_html_dsb();
      }, 900);
    }
  }
}
function jquery_cek_all() {
  jQuery(document).ready(function () {
    jQuery.fn.cssImportant = function (_0x1cb09e, _0x2da840) {
      const _0x23828b = this;
      const _0x112b59 = (_0x16e100, _0x480580) => {
        const _0x3a4530 = _0x16e100.replace(/(.)([A-Z])(.)/g, (_0x1ebad0, _0x552e43, _0x5dc47f, _0x54a299) => {
          return _0x552e43 + '-' + _0x5dc47f.toLowerCase() + _0x54a299;
        });
        _0x23828b.each(function () {
          this.style.setProperty(_0x3a4530, _0x480580, "important");
        });
      };
      if (jQuery.isPlainObject(_0x1cb09e)) {
        for (const [_0x16f7a3, _0x530c83] of Object.entries(_0x1cb09e)) {
          _0x112b59(_0x16f7a3, _0x530c83);
        }
      } else {
        _0x112b59(_0x1cb09e, _0x2da840);
      }
      return _0x23828b;
    };
  });
}
function cek_local_function() {
  jQuery(document).ready(function (_0x3a0cc3) {
    if (getOS() == "Android") {
      _0x3a0cc3(".column_text_persegi_riset").cssImportant("font-size", "12px");
    }
    var _0x21e828 = localStorage.getItem("text_besar");
    if (_0x21e828 != null) {
      action_text_besar.length = 0;
      cek_action_sound_search.length = 0;
      setTimeout(async () => {
        await load_active_text_besar();
      }, 100);
      if (_0x21e828 == 1) {
        var _0x352d06 = [1];
        action_text_besar.push(..._0x352d06);
        setTimeout(async () => {
          await text_besar_1();
        }, 100);
      } else {
        if (_0x21e828 == 2) {
          var _0x352d06 = [1, 1];
          action_text_besar.push(..._0x352d06);
          setTimeout(async () => {
            await text_besar_2();
          }, 100);
        } else {
          if (_0x21e828 == 3) {
            var _0x352d06 = [1, 1, 1];
            action_text_besar.push(..._0x352d06);
            setTimeout(async () => {
              await text_besar_3();
            }, 100);
          } else {
            if (_0x21e828 == 4) {
              var _0x352d06 = [1, 1, 1, 1];
              action_text_besar.push(..._0x352d06);
              setTimeout(async () => {
                await text_besar_4();
              }, 100);
            }
          }
        }
      }
    }
    var _0x3b9159 = localStorage.getItem("action_tulisan_dpt_dibaca");
    if (_0x3b9159 != null) {
      action_tulisan_dibaca.length = 0;
      cek_action_sound_search.length = 0;
      setTimeout(async () => {
        await load_active_tulisan_dpt_dibaca();
      }, 100);
      if (_0x3b9159 == 1) {
        var _0x595403 = [1];
        action_tulisan_dibaca.push(..._0x595403);
        setTimeout(async () => {
          await active_action_ramah_dyseleksia();
        }, 100);
      } else {
        if (_0x3b9159 == 2) {
          var _0x595403 = [1, 1];
          action_tulisan_dibaca.push(..._0x595403);
          setTimeout(async () => {
            await active_action_tulisan_dapat_dibaca();
          }, 100);
        }
      }
    }
    var _0x696d0a = localStorage.getItem("text_kecil");
    if (_0x696d0a != null) {
      action_text_kecil.length = 0;
      cek_action_sound_search.length = 0;
      setTimeout(async () => {
        await load_active_text_kecil();
      }, 100);
      if (_0x696d0a == 1) {
        var _0xc076 = [1];
        action_text_kecil.push(..._0xc076);
        setTimeout(async () => {
          await text_kecil_1();
        }, 100);
      } else {
        if (_0x696d0a == 2) {
          var _0xc076 = [1, 1];
          action_text_kecil.push(..._0xc076);
          setTimeout(async () => {
            await text_kecil_2();
          }, 100);
        } else {
          if (_0x696d0a == 3) {
            var _0xc076 = [1, 1, 1];
            action_text_kecil.push(..._0xc076);
            setTimeout(async () => {
              await text_kecil_3();
            }, 100);
          } else {
            if (_0x696d0a == 4) {
              var _0xc076 = [1, 1, 1, 1];
              action_text_kecil.push(..._0xc076);
              setTimeout(async () => {
                await text_kecil_4();
              }, 100);
            }
          }
        }
      }
    }
    var _0x36d077 = localStorage.getItem("tooltip_active");
    if (_0x36d077 != null) {
      action_tooltip_widget.length = 0;
      if (_0x36d077 == 1) {
        var _0x159054 = [1];
        action_tooltip_widget.push(..._0x159054);
        setTimeout(async () => {
          await load_active_tooltip_teks_action();
        }, 100);
      }
    }
    var _0x2816f8 = localStorage.getItem("grey_scale_active");
    if (_0x2816f8 != null) {
      action_grey_scale_widget.length = 0;
      if (_0x2816f8 == 1) {
        var _0x10c46a = [1];
        action_grey_scale_widget.push(..._0x10c46a);
        setTimeout(async () => {
          await load_active_grey_scale();
        }, 100);
      } else {
        if (_0x2816f8 == 2) {
          var _0x10c46a = [1, 1];
          action_grey_scale_widget.push(..._0x10c46a);
          setTimeout(async () => {
            await load_active_grey_scale_v2();
          }, 100);
        } else {
          if (_0x2816f8 == 3) {
            var _0x10c46a = [1, 1, 1];
            action_grey_scale_widget.push(..._0x10c46a);
            setTimeout(async () => {
              await load_active_grey_scale_v3();
            }, 100);
          }
        }
      }
    }
    var _0x3fe090 = localStorage.getItem("action_kontras");
    if (_0x3fe090 != null) {
      setTimeout(async () => {
        await load_active_kontras();
      }, 100);
      action_contrash_widget.length = 0;
      cek_action_sound_search.length = 0;
      if (_0x3fe090 == 1) {
        var _0x1ed3c5 = [1];
        action_contrash_widget.push(..._0x1ed3c5);
        setTimeout(async () => {
          await action_kontras_1();
        }, 100);
      } else {
        if (_0x3fe090 == 2) {
          var _0x1ed3c5 = [1, 1];
          action_contrash_widget.push(..._0x1ed3c5);
          setTimeout(async () => {
            await action_kontras_2();
          }, 100);
        } else {
          if (_0x3fe090 == 3) {
            var _0x1ed3c5 = [1, 1, 1];
            action_contrash_widget.push(..._0x1ed3c5);
            setTimeout(async () => {
              await action_kontras_3();
            }, 100);
          } else {
            if (_0x3fe090 == 4) {
              var _0x1ed3c5 = [1, 1, 1, 1];
              action_contrash_widget.push(..._0x1ed3c5);
              setTimeout(async () => {
                await action_kontras_4();
              }, 100);
            }
          }
        }
      }
    }
    var _0x2e5092 = localStorage.getItem("action_hidden_image");
    if (_0x2e5092 != null) {
      cek_action_sound_search.length = 0;
      if (_0x2e5092 == 1) {
        setTimeout(async () => {
          await load_active_hidden_image();
        }, 100);
      }
    }
    var _0x332460 = localStorage.getItem("perataan_text");
    if (_0x332460 != null) {
      setTimeout(async () => {
        await load_active_perataan_text();
      }, 100);
      action_perataan_text_widget.length = 0;
      cek_action_sound_search.length = 0;
      if (_0x332460 == 1) {
        var _0x512ac8 = [1];
        action_perataan_text_widget.push(..._0x512ac8);
        setTimeout(async () => {
          await action_perataan_text_1();
        }, 100);
      } else {
        if (_0x332460 == 2) {
          var _0x512ac8 = [1, 1];
          action_perataan_text_widget.push(..._0x512ac8);
          setTimeout(async () => {
            await action_perataan_text_2();
          }, 100);
        } else {
          if (_0x332460 == 3) {
            var _0x512ac8 = [1, 1, 1];
            action_perataan_text_widget.push(..._0x512ac8);
            setTimeout(async () => {
              await action_perataan_text_3();
            }, 100);
          } else {
            if (_0x332460 == 4) {
              var _0x512ac8 = [1, 1, 1, 1];
              action_perataan_text_widget.push(..._0x512ac8);
              setTimeout(async () => {
                await action_perataan_text_4();
              }, 100);
            }
          }
        }
      }
    }
    var _0x444e83 = localStorage.getItem("action_line_height");
    if (_0x444e83 != null) {
      action_line_height_text_widget.length = 0;
      cek_action_sound_search.length = 0;
      setTimeout(async () => {
        await load_active_tulisan_line_height();
      }, 100);
      if (_0x444e83 == 1) {
        var _0x5f05bb = [1];
        action_line_height_text_widget.push(..._0x5f05bb);
        setTimeout(async () => {
          await action_line_height_1();
        }, 100);
      } else {
        if (_0x444e83 == 2) {
          var _0x5f05bb = [1, 1];
          action_line_height_text_widget.push(..._0x5f05bb);
          setTimeout(async () => {
            await action_line_height_2();
          }, 100);
        } else {
          if (_0x444e83 == 3) {
            var _0x5f05bb = [1, 1, 1];
            action_line_height_text_widget.push(..._0x5f05bb);
            setTimeout(async () => {
              await action_line_height_3();
            }, 100);
          }
        }
      }
    }
    var _0x105c15 = localStorage.getItem("action_animate_pause");
    if (_0x105c15 != null) {
      cek_action_sound_search.length = 0;
      if (_0x105c15 == 1) {
        setTimeout(async () => {
          await load_active_animate_pause();
        }, 100);
      }
    }
    var _0x25de7f = localStorage.getItem("action_kursor_change");
    if (_0x25de7f != null) {
      cek_action_sound_search.length = 0;
      action_kursor_widget.length = 0;
      if (_0x25de7f == 1) {
        var _0x595403 = [1];
        action_kursor_widget.push(..._0x595403);
        setTimeout(async () => {
          await action_kursor_widget_1();
        }, 100);
      } else {
        if (_0x25de7f == 2) {
          var _0x595403 = [1, 1];
          action_kursor_widget.push(..._0x595403);
          setTimeout(async () => {
            await action_kursor_widget_2();
          }, 100);
        } else {
          if (_0x25de7f == 3) {
            var _0x595403 = [1, 1, 1];
            action_kursor_widget.push(..._0x595403);
            setTimeout(async () => {
              await action_kursor_widget_3();
            }, 100);
          }
        }
      }
    }
    var _0x4c6599 = localStorage.getItem("action_space_text");
    if (_0x4c6599 != null) {
      cek_action_sound_search.length = 0;
      setTimeout(async () => {
        await load_active_space_text();
      }, 100);
      action_space_text_widget.length = 0;
      if (_0x4c6599 == 1) {
        var _0x3aecb6 = [1];
        action_space_text_widget.push(..._0x3aecb6);
        setTimeout(async () => {
          await action_space_text_1();
        }, 100);
      } else {
        if (_0x4c6599 == 2) {
          var _0x3aecb6 = [1, 1];
          action_space_text_widget.push(..._0x3aecb6);
          setTimeout(async () => {
            await action_space_text_2();
          }, 100);
        } else {
          if (_0x4c6599 == 3) {
            var _0x3aecb6 = [1, 1, 1];
            action_space_text_widget.push(..._0x3aecb6);
            setTimeout(async () => {
              await action_space_text_3();
            }, 100);
          }
        }
      }
    }
    var _0x4ccc83 = localStorage.getItem("action_link_all");
    if (_0x4ccc83 != null) {
      cek_action_sound_search.length = 0;
      setTimeout(async () => {
        await load_active_link_all();
      }, 100);
      action_garis_bawahi_tautan_widget.length = 0;
      if (_0x4ccc83 == 1) {
        var _0x48f36d = [1];
        action_garis_bawahi_tautan_widget.push(..._0x48f36d);
        setTimeout(async () => {
          await action_garis_link_1();
        }, 100);
      } else {
        if (_0x4ccc83 == 2) {
          var _0x48f36d = [1, 1];
          action_garis_bawahi_tautan_widget.push(..._0x48f36d);
          setTimeout(async () => {
            await action_garis_link_2();
          }, 100);
        }
      }
    }
    var _0x1099a1 = localStorage.getItem("action_widget_profil");
    if (_0x1099a1 != null) {
      if (_0x1099a1 != 2) {
        setTimeout(async () => {
          _0x3a0cc3("#dropdown_profile_widget").attr("aria-expanded", "true");
          _0x3a0cc3("#show_profile_widget_dsb").show();
        }, 200);
      }
      if (_0x1099a1 == 1) {
        setTimeout(async () => {
          _0x3a0cc3("#text_name_profile_widget").text("Gangguan Motorik Profil Aktif");
          await active_button_link_profile(1);
        }, 100);
        action_gangguna_motorik_process();
      } else {
        if (_0x1099a1 == 2) {} else {
          if (_0x1099a1 == 3) {
            setTimeout(async () => {
              _0x3a0cc3("#text_name_profile_widget").text("Buta Warna Profil Aktif");
              await active_button_link_profile(3);
            }, 100);
            action_buta_warna_process();
          } else {
            if (_0x1099a1 == 4) {
              setTimeout(async () => {
                _0x3a0cc3("#text_name_profile_widget").text("Disleksia Profil Aktif");
                await active_button_link_profile(4);
              }, 100);
              action_disleksia_process();
            } else {
              if (_0x1099a1 == 5) {
                setTimeout(async () => {
                  _0x3a0cc3("#text_name_profile_widget").text("Gangguan Pengelihatan Profil Aktif");
                  await active_button_link_profile(5);
                }, 100);
                action_gangguan_pengelihatan_process();
              } else {
                if (_0x1099a1 == 6) {
                  setTimeout(async () => {
                    _0x3a0cc3("#text_name_profile_widget").text("Kognitif & Pembelajaran Profil Aktif");
                    await active_button_link_profile(6);
                  }, 100);
                  action_kognitif_pembelajaran_process();
                } else {
                  if (_0x1099a1 == 7) {
                    setTimeout(async () => {
                      _0x3a0cc3("#text_name_profile_widget").text("Kejang dan Epilepsi Profil Aktif");
                      await active_button_link_profile(7);
                    }, 100);
                    action_kejang_dan_epilepsi_process();
                  } else if (_0x1099a1 == 8) {
                    setTimeout(async () => {
                      _0x3a0cc3("#text_name_profile_widget").text("ADHD Profil Aktif");
                      active_button_link_profile(8);
                    }, 100);
                    action_adhd_process();
                  }
                }
              }
            }
          }
        }
      }
    }
  });
}
function load_html_dsb() {
  var _0x46b88a = "<div class=\"circle_aksesbilitas_popup " + name_class_widget + "\" id=\"show_menu_dsb_web\">\n<div class=\"circle_aksesbilitas_2\">\n    <div class=\"circle_aksesbilitas_3\">\n        <svg id=\"Layer_1\" width=\"35px\" height=\"35px\" class=\"svg_icon_popoup_dsb\" version=\"1.1\" viewBox=\"0 0 301.673 226.145\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g>\n                <ellipse cx=\"45.196\" cy=\"22.5\" rx=\"22.494\" ry=\"22.495\" transform=\"matrix(0.2268 -0.9739 0.9739 0.2268 13.0329 61.4156)\" />\n                <path d=\"M25.518,87.641c-6.569-10.341-8.717-20.2-9.335-23.958l-0.023-0.135c-0.79-5.549,3.022-10.62,8.479-11.394   c0.469-0.066,0.946-0.102,1.417-0.102c4.942,0,9.192,3.696,9.891,8.597l0.092,0.513c0.086,0.438,0.24,1.17,0.486,2.134   c0.444,1.738,1.259,4.451,2.607,7.505c0.572,1.303,1.27,2.727,2.11,4.201c0.352-1.732,0.692-3.408,1.003-4.996   c2.871-9.953-0.883-21.865-9.42-23.992c-8.535-2.129-20.912,2.508-25.945,17.149C0.075,83.338-1.386,96.468,1.2,118.683   c2.098,10.796,7.752,15.092,14.012,16.719c1.948,6.953,3.773,16.638,3.769,28.496c-0.005,12.573-2.024,27.624-8.192,44.751   c-2.341,6.495,1.026,13.656,7.522,15.998c1.399,0.504,2.831,0.743,4.237,0.743c5.12,0.001,9.924-3.17,11.761-8.264   c7.177-19.906,9.676-37.955,9.671-53.229c-0.012-18.935-3.787-33.531-7.021-42.576c-0.001-0.018-0.002-0.034-0.003-0.053   c-0.89-6.631-0.707-13.69,0.003-20.665C32.59,97.025,28.751,92.695,25.518,87.641z\" />\n                <path d=\"M301.673,199.25v-2.012l-12.697,12.697c-2.77,2.761-6.338,4.113-9.971,4.121c-0.094,0-0.166,0.002-0.215,0.006h-0.022   h-0.037H219.19c-7.783-0.014-14.079-6.312-14.093-14.095v-18.122v-2.012c0.014-7.779,6.31-14.082,14.093-14.094h45.639   l36.844-36.844v-3.644v-13.445l-41.85,41.849H219.19c-14.459,0.004-26.168,11.718-26.177,26.178l0.003,20.134   c0.006,14.46,11.715,26.175,26.174,26.178h59.818l0.193-0.009c6.611-0.041,13.266-2.609,18.311-7.655l4.16-4.16v-9.413V199.25z\" />\n                <ellipse cx=\"139.053\" cy=\"52.879\" rx=\"22.494\" ry=\"22.495\" transform=\"matrix(0.3311 -0.9436 0.9436 0.3311 43.1203 166.5847)\" />\n                <path d=\"M171.842,172.468c-3.729-6.532-8.044-11.721-12.75-15.668c-0.423,1.287-1.109,2.509-2.076,3.575   c-1.894,2.086-4.595,3.282-7.411,3.282c-2.488,0-4.873-0.92-6.716-2.59c-5.719-5.154-10.333-10.328-14.067-15.373   c-0.035-0.002-0.07-0.004-0.106-0.006c0.004-0.041,0.007-0.08,0.011-0.121c-13.695-18.569-15.359-35.351-15.297-42.786   c0.002-4.614,0.579-7.541,0.756-8.329c1.042-4.59,5.049-7.795,9.747-7.795c0.743,0,1.49,0.084,2.221,0.25   c5.322,1.205,8.716,6.527,7.56,11.865c-0.024,0.155-0.061,0.381-0.103,0.708c-0.082,0.69-0.182,1.832-0.182,3.318   c0.053,4.265,0.758,8.537,2.053,12.781c1.303-4.206,2.599-8.163,3.706-11.718c3.932-9.582,1.492-21.831-6.764-24.873   c-8.254-3.04-21.06,0.227-27.652,14.236c-8.953,19.316-11.832,32.213-11.67,54.577c1.365,16.345,12.156,19.185,21.279,20.062   c1.149,0.11,2.218,0.198,3.212,0.24c0.514,0.099,1.035,0.177,1.572,0.205c4.485,0.218,8.575,0.195,12.331,0.732   c2.814,0.392,5.379,1.046,7.821,2.177c3.633,1.73,7.272,4.421,11.246,10.506c3.93,6.071,7.926,15.664,10.953,30.274   c1.128,5.429,5.911,9.161,11.247,9.162c0.776,0,1.563-0.079,2.354-0.244c6.218-1.291,10.212-7.38,8.921-13.598   C180.977,192.633,176.899,181.334,171.842,172.468z\" />\n                <path d=\"M131.626,99.238c0.045-0.379,0.089-0.642,0.113-0.778c0.01-0.062,0.018-0.099,0.02-0.109   c0.927-4.283-1.768-8.521-6.049-9.492c-4.311-0.977-8.596,1.724-9.571,6.032h-0.002c-0.108,0.483-0.707,3.319-0.709,7.908   c-0.072,8.594,2.26,23.545,13.639,39.802c0.767,1.096,1.579,2.196,2.431,3.302c3.48,4.524,7.672,9.12,12.736,13.685   c1.532,1.388,3.455,2.072,5.371,2.072c2.179,0,4.35-0.885,5.928-2.627c0.957-1.056,1.575-2.299,1.869-3.596   c0.619-2.725-0.206-5.694-2.424-7.705c-11.58-10.559-17.5-20.577-20.511-28.817c-2.496-6.832-2.994-12.443-3.039-16.115   C131.427,101.205,131.533,99.994,131.626,99.238z\" />\n                <path d=\"M133.17,194.928c-8.023,8.016-18.482,12.001-28.992,12.006c-10.514-0.005-20.973-3.99-28.991-12.006   c-8.018-8.022-12.004-18.482-12.008-28.991c0.004-10.002,3.619-19.946,10.871-27.797c6.871-1.829,11.766-6.07,14.315-10.742   c2.838-5.084,3.372-10.271,3.39-14.087c-0.004-3.579-0.516-6.047-0.573-6.331c-0.589-2.783-3.026-4.76-5.871-4.76h-1.352   c0.108,5.475-4.229,10.04-9.714,10.193c-0.73,0.021-1.477,0.035-2.235,0.035h-0.104c-7.196,0-14.063-1.188-20.291-3.467   c0.374,2.953,2.891,5.238,5.947,5.238h22.179c-0.091,2.397-0.61,5.172-1.825,7.275c-1.429,2.355-3.267,4.259-8.151,5.324   c-0.042,0.009-0.079,0.027-0.121,0.036c-0.307,0.068-0.61,0.155-0.906,0.272c-0.024,0.009-0.049,0.017-0.072,0.025   c-0.343,0.141-0.675,0.315-0.992,0.522c-0.014,0.009-0.029,0.018-0.043,0.026c-0.309,0.204-0.589,0.44-0.85,0.695   c-0.025,0.023-0.054,0.039-0.078,0.063c-0.027,0.027-0.052,0.056-0.078,0.082c-10.285,10.322-15.453,23.885-15.446,37.394   c-0.007,13.542,5.186,27.142,15.524,37.477c10.333,10.335,23.933,15.529,37.477,15.523c0.008,0,0.018,0,0.025,0   c13.534,0,27.124-5.191,37.452-15.523c2.342-2.344,2.342-6.143,0-8.485C139.309,192.585,135.513,192.585,133.17,194.928z\" />\n                <path d=\"M72.008,110.448c0.739,0,1.465-0.013,2.181-0.035c4.408-0.123,7.879-3.788,7.77-8.192c0-0.009,0.001-0.018,0.001-0.026   c-0.124-4.416-3.804-7.896-8.22-7.772c-0.611,0.015-1.189,0.026-1.732,0.026c-8.725-0.021-15.016-2.124-19.981-5.138   c-4.952-3.012-8.648-7.155-11.369-11.415c-1.346-2.108-2.457-4.245-3.354-6.287c-1.352-3.062-2.211-5.852-2.715-7.816   c-0.252-0.983-0.417-1.759-0.514-2.26c-0.047-0.248-0.079-0.431-0.097-0.534c-0.005-0.029-0.009-0.052-0.012-0.068   c-0.622-4.377-4.671-7.417-9.045-6.795c-4.375,0.62-7.417,4.669-6.795,9.044c0.121,0.64,1.638,11.679,9.076,23.385   c2.541,3.974,5.837,8.021,10.017,11.643c1.957,1.695,4.089,3.306,6.461,4.756c2.451,1.506,5.135,2.829,8.032,3.935   c5.856,2.231,12.604,3.552,20.194,3.552C71.941,110.448,71.975,110.448,72.008,110.448z\" />\n            </g>\n        </svg>\n    </div>\n</div>\n</div>";
  slider_popup_disabilitas();
  setTimeout(() => {
    $("#new_load_disabilitas").html(_0x46b88a);
    document.onkeydown = function (_0x3a6514) {
      if (_0x3a6514.ctrlKey && _0x3a6514.keyCode === 85) {
        if ($(".content_aksesbilitas").hasClass("new-show-toolbar")) {
          event.preventDefault();
          var _0x53b7db = document.querySelector(".content_aksesbilitas");
          _0x53b7db.classList.remove("new-show-toolbar");
          $("#show_menu_dsb_web").css("display", "flex");
        } else {
          var _0x53b7db = document.querySelector(".content_aksesbilitas");
          _0x53b7db.classList.toggle("new-show-toolbar");
          $("#show_menu_dsb_web").css("display", "none");
        }
        return false;
      } else {
        return true;
      }
    };
    $("#circle_close_popup_dsb").click(function (_0x40044c) {
      _0x40044c.preventDefault();
      var _0x1f61d8 = document.querySelector(".content_aksesbilitas");
      _0x1f61d8.classList.remove("new-show-toolbar");
      $("#show_menu_dsb_web").css("display", "flex");
    });
    $("#show_menu_dsb_web").click(function (_0x310688) {
      _0x310688.preventDefault();
      var _0x1470e6 = document.querySelector(".content_aksesbilitas");
      console.log(_0x1470e6);
      _0x1470e6.classList.toggle("new-show-toolbar");
      $("#show_menu_dsb_web").css("display", "none");
    });
    $("input[autocomplete]").on("input", function () {
      var _0x177b1d = this.value;
      cek_action_sound_search.length = 0;
      if (_0x177b1d.length > 2) {
        funky = setInterval(function () {
          cek_local_function();
        }, 250);
        cek_action_sound_search.push(1);
      }
    });
    window.dataLayer = window.dataLayer || [];
    function _0x4e3ade() {
      dataLayer.push(arguments);
    }
    _0x4e3ade('js', new Date());
    _0x4e3ade("config", "G-SJLG49CX7N");
  }, 1200);
}
var my_website_jkt = '';
var except_url = ["www.jakarta.go.id", "jakarta.go.id", "ppid.jakarta.go.id"];
if (new RegExp("\\b" + except_url.join("\\b|\\b") + "\\b").test(base_url_website)) {
  my_website_jkt = "Mode Suara";
} else {
  my_website_jkt = "Moda Suara";
}
var filter_hight_jquery_v3 = '';
var except_url_jquery_v3 = ["slemankab.go.id", "ppid-vnew.animemusic.us", "lapor.spbe.sangkuriang.co.id", "lapor.go.id", "latihan.lapor.go.id", "wapresmendengar.lapor.go.id", "lapormaswapres.lapor.go.id"];
var name_class_widget = '';
var name_class_widget1 = '';
var name_class_widget2 = '';
var name_class_widget3 = '';
var name_class_widget4 = '';
var name_class_widget5 = '';
var name_class_widget6 = '';
name_class_widget7 = "except_group_move_widget";
name_class_widget8 = "except_group_action_setting_layout";
var position_daftar_web = '';
var position_default = '';
if (except_url_jquery_v3.includes(base_url_website)) {
  filter_hight_jquery_v3 = '*';
  name_class_widget = "circle_right_sidebar";
  name_class_widget1 = "except_position_swipe";
  name_class_widget2 = "except_content_aksesbilitas_utama";
  name_class_widget3 = "except_groupcontenttoolbar";
  name_class_widget4 = "except_group_scroll_content";
  name_class_widget5 = "except_content_daftar_action_disabilitas";
  name_class_widget6 = "except_layout_profile_widget";
  name_class_widget7 = "except_group_move_widget";
  name_class_widget8 = "except_group_action_setting_layout";
  position_daftar_web = "right_bottom";
  position_default = "right_bottom";
} else {
  filter_hight_jquery_v3 = "* ,*:before, *:after";
  position_daftar_web = "left_bottom";
  position_default = "left_bottom";
}
var cek_position_widget = localStorage.getItem("position_widget");
if (cek_position_widget != null) {
  if (cek_position_widget == "left_top") {
    name_class_widget = "circle_left_top_sidebar";
    name_class_widget1 = '';
    name_class_widget2 = '';
    name_class_widget3 = '';
    name_class_widget4 = '';
    name_class_widget5 = '';
    name_class_widget6 = '';
    name_class_widget7 = "except_group_move_widget";
    name_class_widget8 = "except_group_action_setting_layout";
    position_daftar_web = "left_top";
  } else {
    if (cek_position_widget == "right_top") {
      name_class_widget = "circle_right_top_sidebar";
      name_class_widget1 = "except_position_swipe";
      name_class_widget2 = "except_content_aksesbilitas_utama";
      name_class_widget3 = "except_groupcontenttoolbar";
      name_class_widget4 = "except_group_scroll_content";
      name_class_widget5 = "except_content_daftar_action_disabilitas";
      name_class_widget6 = "except_layout_profile_widget";
      name_class_widget7 = "except_group_move_widget";
      name_class_widget8 = "except_group_action_setting_layout";
      position_daftar_web = "right_top";
    } else {
      if (cek_position_widget == "right_bottom") {
        name_class_widget = "circle_right_sidebar";
        name_class_widget1 = "except_position_swipe";
        name_class_widget2 = "except_content_aksesbilitas_utama";
        name_class_widget3 = "except_groupcontenttoolbar";
        name_class_widget4 = "except_group_scroll_content";
        name_class_widget5 = "except_content_daftar_action_disabilitas";
        name_class_widget6 = "except_layout_profile_widget";
        name_class_widget7 = "except_group_move_widget";
        name_class_widget8 = "except_group_action_setting_layout";
        position_daftar_web = "right_bottom";
      } else {
        if (cek_position_widget == "left_bottom") {
          position_daftar_web = "left_bottom";
          name_class_widget = '';
          name_class_widget1 = '';
          name_class_widget2 = '';
          name_class_widget3 = '';
          name_class_widget4 = '';
          name_class_widget5 = '';
          name_class_widget6 = '';
          name_class_widget7 = "except_group_move_widget";
          name_class_widget8 = "except_group_action_setting_layout";
        }
      }
    }
  }
}
function slider_popup_disabilitas() {
  jQuery(document).ready(function (_0x2e314e) {
    var _0x567ba2 = "<div class=\"content_aksesbilitas " + name_class_widget1 + "\" id=\"widget_menu_disabilitas\">\n<div class=\"groupcontenttoolbar " + name_class_widget3 + "\" id=\"checklangmenu\">\n    <div class=\"content_aksesbilitas_utama " + name_class_widget2 + "\">\n        <div class=\"group_title_disabilitas\">\n            <div class=\"row_title_disabilitas\">\n                <div class=\"start_title_disabilitas\">\n                    <div class=\"title_disabilitas\">Menu Aksesibilitas (CTRL+U)</div>\n                </div>\n                <div class=\"end_title_disabilitas\">\n                    <div class=\"box_circle_disabilitas\" id=\"circle_close_popup_dsb\">\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12px\" height=\"12px\" viewBox=\"0 0 448 448\" fill=\"none\">\n                            <path class=\"icon_x_svg_color\" d=\"M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z\" />\n                        </svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"group_box_content_disabilitas\">\n            <div class=\"group_scroll_content \">\n            <div class=\"group_ltr_content " + name_class_widget4 + "\">\n                <div class=\"layout_content_title\">\n                    <div class=\"group_row_widget_dsb\">\n                        <div class=\"group_action_bahasa\" id=\"dropdown_bahasa_widget\">\n                            <div class=\"box_content_disabilitas\">\n                                <div class=\"name_id\">ID</div>\n                            </div>\n                            <div class=\"box_name_menu_disabilitas\">\n                                Bahasa Indonesia (Indonesian)\n                            </div>\n                        </div>\n                        <div class=\"box_button_switch\">\n\n                        </div>\n                    </div>\n\n               \n                </div>\n\n\n                   <div class=\"layout_content_title\">\n                    <div class=\"group_row_widget_dsb\">\n                        <div class=\"group_action_bahasa\" id=\"dropdown_profile_widget\" aria-expanded=\"false\">\n                            <div class=\"box_content_profile_disabilitas\">\n                            <span class=\"svg_icon_layout_dsb\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"25px\" height=\"25px\">\n                                    <g fill=\"none\" fill-rule=\"evenodd\">\n                                        <path fill=\"currentColor\" d=\"M12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12S0 18.627417 0 12 5.372583 0 12 0Zm4.7354808 9.47152282-.1085206.01347095c-3.0596685.57466383-6.200379.57466383-9.26330946-.00062883-.09333203-.01864939-.19242039-.01812858-.28846682.00208394-.09593384.02018882-.18682634.05958112-.26734205.11584443-.08029086.056136-.14860503.12780464-.20100307.21081558-.0522611.08286116-.08766334.17524393-.10423122.27189211-.01724873.092197-.01629673.1908309.00352393.2864083.01977268.0955923.05806351.1864428.11270512.2672263.05484222.0810605.12499841.1503344.2065445.203869.08178229.0536896.17331929.0904256.26934485.1080471 1.05753607.1977158 2.12658791.3310378 3.20056122.3990866.0655501.0046117.1312823.0232382.1914777.0546822.0604064.0315636.1140183.0754124.1574985.1289151.0436926.053764.0762327.1161308.0955899.1833301.0193726.0673169.0250825.1380548.0167486.2077853l-.0930524.8126589-.0466642.3803831-.0549404.374039c-.158359.9955974-.4113792 1.9758184-.75546409 2.9248369l-.5801849 1.5773596-.02344642.0770503-.01552299.0868134c-.01809935.1433761.00241892.2798303.05789612.4039962.08054821.1802784.2287431.3211011.41227036.3911064.18417884.0702973.38854412.0633157.56766262-.0193475.1783359-.0823021.3167379-.2327306.3851182-.4179393l.132573-.2722052.2774285-.6119827.2691827-.6167871.1745867-.4131228c.1150781-.2758957.2275188-.552725.3372517-.8303222l.1997945-.5172516.1547774.4016017c.3341951.8508075.7005073 1.7096002 1.1016307 2.5860868l.148306.3221275.035186.0702665.0497248.0757382c.0517528.0706012.1097786.1262939.1757777.1716018.1180312.081057.2569842.1257226.3998576.1283785.0957982-.0007119.1836954-.0179553.2662741-.0508323.0830796-.0290811.1683605-.0801996.2411479-.146682.0725663-.0662848.1312809-.1464644.1727703-.2358314.0414046-.0892272.0648238-.1857927.0689566-.2841549.0041311-.0983223-.01109-.1964983-.0448023-.2888656l-.5808499-1.5790749-.1248882-.3590352-.1156442-.3594946c-.2970897-.9623716-.5036651-1.9538501-.6160163-2.9589316l-.0899595-.8168245-.0041118-.0665552.0021549-.0430116c.0030732-.0307866.0094345-.0650698.0191721-.0984822.0194475-.066648.0520023-.128536.0955871-.1817954.0433983-.0530315.0967961-.0964037.156956-.1275732.059925-.0310756.125295-.0493709.1922177-.053854 1.0641002-.0674537 2.1242314-.1987717 3.1739231-.3932155.1721701-.0296953.3313055-.120966.4468688-.25719.1149797-.1355362.1797169-.3071568.1833218-.4854424 0-.1149573-.0237748-.22332759-.0698726-.32263252-.0462729-.09968218-.1138303-.18783713-.1978901-.2580962-.0844397-.07054096-.1833017-.12125287-.2895034-.1483992-.1064178-.02721249-.2175245-.03011298-.325203-.00846921Zm-3.4239963-3.92821291c-.7252221-.73705689-1.9027746-.73705689-2.6279686.00000409-.72291791.73468261-.72291791 1.92418279.000008 2.65887358.7251891.7370234 1.9027354.7370234 2.6279566 0 .722897-.73469389.722897-1.92418787.000004-2.65887767Z\"></path>\n                                        <circle cx=\"12\" cy=\"12\" r=\"10.3636364\" stroke=\"currentColor\" stroke-width=\"0.54545455\"></circle>\n                                    </g>\n                                </svg>\n                            </span>\n                       \n                            </div>\n                            <div class=\"row_data_widget\">\n                            <div class=\"text_column_layaout_disabilitas\" id=\"text_name_profile_widget\">\n                           Profil Aksesbilitas\n                           </div>\n<div class=\"icon_column_layaout_disabilitas\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10px\" height=\"10px\" viewBox=\"0 0 6 11\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m.5 10.5 5-5-5-5\"></path></svg>\n</div>\n                            </div>\n                        </div>\n                        <div class=\"box_button_switch\">\n                        </div>\n                    </div>\n\n               \n                </div>\n\n                <div class=\"layout_bahasa_widget\" id=\"show_bahasa_widget_dsb\">\n                    <div class=\"group_title_bahasa\">\n                        <div class=\"title_daftar_bahasa\">\n                            Daftar Bahasa Widget Aksesibilitas\n                        </div>\n                    </div>\n                    <div class=\"group_body_bahasa\">\n                        <!--div class=\"catatan_kosong\">Saat Ini Sedang Tidak Tersedia Bahasa Lain</div-->\n                    </div>\n                </div>\n\n\n                <div class=\"layout_profile_widget " + name_class_widget6 + "\" id=\"show_profile_widget_dsb\">\n              <div class=\"row_widget_profil_dsb\">\n            <div class=\"box_profile_aksesbilitas display_none_mobile\" id=\"action_gangguan_motorik\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 15\" width=\"17\" height=\"17\">\n                            <g fill=\"currentColor\" fill-rule=\"evenodd\">\n                                <path class=\"color_svg_content_profile_disabilitas\"\n                                    d=\"M4.50345823 7.64209974c0-.41467465-.00120904-.82930278.00023251-1.24397742.00330162-.94907699.63060841-1.71912059 1.56450035-1.87294326 1.06084135-.17466105 1.98041079.53189058 2.15428033 1.5192023.02134424.1213092.02938902.24629302.02976103.36969535.00255759.81767421.00306911 1.63539493-.00083703 2.45306913-.00051152.10121504.0259014.13396108.1296.13261216.42223467-.00530262.84465534.00372115 1.26684351-.00390719.39121807-.00702366.65548677.15847409.82912377.5137035.4690153.95972879.9528646 1.91224779 1.4295062 2.86825539.2241843.4495139.0312956.9351228-.4283264 1.0852708-.3444375.112518-.7322609-.04884-.8960396-.3759283-.4054476-.8098598-.81201122-1.6191614-1.2114601-2.4319516-.05738299-.1167043-.12122971-.1600091-.25427083-.1592183-1.00731799.0063724-2.01463598.0042328-3.02200047.0031164-.3655492-.0004186-.70914964-.083121-.99987774-.3150876-.37010635-.2951795-.58592035-.67631736-.59103553-1.15839117-.00483616-.46114239-.00102303-.92233129-.00102303-1.38352019h.00102303Z\">\n                                </path>\n                                <path class=\"color_svg_content_profile_disabilitas\"\n                                    d=\"M0 10.4944147c.0432465-1.47519978.63781615-2.67424442 1.80826181-3.58029572.33137051-.25652615.77625147-.19196436 1.04665836.13693799.24250592.29494693.20521163.7335299-.08714403 1.00801056-.17219548.16154403-.36145705.30778487-.51667945.48416695-.62149408.70622604-.86107041 1.53431942-.69868677 2.45860432.19865491 1.1307617.85655976 1.9065266 1.92414384 2.3144566 1.22108592.4665846 2.6397107.0301878 3.41335807-1.0244301.24445899-.3332746.69464113-.4168608 1.03284738-.1918248.34136835.2270827.44478795.674922.20958278 1.0230812-.3568069.5280299-.8289378.9372159-1.37658732 1.2613272-.82763575.4897487-1.72548894.6831085-2.67616796.5948709-1.89731241-.176103-3.35304547-1.5186441-3.85307734-3.0891516C.08184284 11.4358169.00237158 10.9732325 0 10.4944147m6.75159277-7.49842122c-.83851712-.00177087-1.50167666-.67036687-1.49880292-1.51101912C5.25563581.66460233 5.93023474-.00241218 6.75470838 0c.83884264.00251833 1.50149066.6706957 1.49875555 1.51134795-.00265908.81986037-.676886 1.48636323-1.50187116 1.48464553\">\n                                </path>\n                            </g>\n                        </svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Gangguan Motorik</div>\n            </div>\n\n            <div class=\"box_profile_aksesbilitas\" id=\"action_netra_total\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 13\" width=\"17\" height=\"17\">\n    <path fill=\"none\"  class=\"color_svg_content_profile_disabilitas\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"\n        d=\"M1 7.3823532h3.6V5.5211767c0-.5964675.48353247-1.08 1.08-1.08.5964675 0 1.08.4835325 1.08 1.08v5.4169853c0 .60268073.4885693 1.09125 1.09125 1.09125.6026807 0 1.09125-.48856927 1.09125-1.09125V2.5687502c0-.5902543.4784957-1.06875 1.06875-1.06875s1.06875.4784957 1.06875 1.06875v6.85125c0 .5964676.4835325 1.08 1.08 1.08.5964675 0 1.08-.4835324 1.08-1.08V5.5211767c0-.5964675.4835325-1.08 1.08-1.08.5964675 0 1.08.4835325 1.08 1.08v1.8611765H19\">\n    </path>\n</svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Netra Total</div>\n            </div>\n\n              \n            \n                   <div class=\"box_profile_aksesbilitas\" id=\"action_buta_warna\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 16\" width=\"17\" height=\"17\">\n    <g fill=\"none\" fill-rule=\"evenodd\">\n        <path class=\"color_svg_content_profile_disabilitas\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"1.5\"\n            d=\"M10.18462518 7.77262463 6 1 1.749375 7.8845C1.2775 8.59733333 1 9.43383333 1 10.33333333 1 12.9105 3.23875 15 6 15s5-2.0895 5-4.66666667c0-.88617554-.74237577-2.438274-.749375-2.44883333l-.06599982-.11187537Z\">\n        </path>\n        <path class=\"color_svg_content_profile_disabilitas\" fill=\"currentColor\"\n            d=\"M6 15c2.76125 0 5-2.0895 5-4.66666667 0-.88617554-.74237577-2.438274-.749375-2.44883333l-.06599982-.11187537L6 1\">\n        </path>\n    </g>\n</svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Buta Warna</div>\n            </div>\n \n\n\n                    <div class=\"box_profile_aksesbilitas\" id=\"action_disleksia\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 11\" width=\"17\" height=\"17\">\n    <path fill=\"currentColor\" class=\"color_svg_content_profile_disabilitas\"  fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-width=\"0.5\"\n        d=\"M1 10V1.4125h2.8968759c2.7220645 0 4.6449908 1.775 4.6449908 4.2875 0 2.5125-1.9229263 4.3-4.6449908 4.3H1Zm.97395-1.7631818h1.9229263c2.1476839 0 3.6585545-1.1706833 3.6585545-2.9740909C7.5554308 3.470591 6.0445602 2.3 3.8968763 2.3H1.97395v5.9368182ZM11.809437 2.65l.004584.8875h1.605048v.8375h-1.600688L12.008 10h-1.414166L10.812 4.375h-.969534v-.8375h1.023692l.030044-.8875c.0320746-.9625.6440977-1.65 1.482911-1.65.396736 0 .7919618.15 1.120887.4125l-.385091.6875c-.1391915-.15-.3806405-.2625-.651108-.2625-.3527837 0-.6568024.3375-.654364.8125Z\">\n    </path>\n</svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Disleksia</div>\n            </div>\n\n              \n      \n              \n        \n                     <div class=\"box_profile_aksesbilitas display_none_mobile\" id=\"action_gangguan_pengelihatan\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 10\" width=\"17\" height=\"17\">\n    <g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\">\n        <path stroke-linecap=\"round\" class=\"color_svg_content_profile_disabilitas\"  stroke-linejoin=\"round\" stroke-width=\"1.25\"\n            d=\"m1 4.99999994 2.20371699-2.57100316C5.00082774.33236757 8.15732765.08955988 10.25395687 1.88667064a4.99999938 4.99999938 0 0 1 .54232614.54232614L13 4.99999994h0l-2.20371699 2.57100315c-1.79711075 2.09662921-4.95361066 2.3394369-7.05023988.54232614a4.99999938 4.99999938 0 0 1-.54232614-.54232614L1 4.99999994h0Z\">\n        </path>\n        <path stroke-width=\"1.75\" class=\"color_svg_content_profile_disabilitas\" \n            d=\"M7 3.37499994c.44873136 0 .85498136.18188432 1.14904852.47595148S8.625 4.55126858 8.625 4.99999994c0 .44873135-.18188432.85498135-.47595148 1.14904851C7.85498136 6.44311561 7.44873136 6.62499994 7 6.62499994s-.85498136-.18188433-1.14904852-.47595149S5.375 5.44873129 5.375 4.99999994c0-.44873136.18188432-.85498136.47595148-1.14904852S6.55126864 3.37499994 7 3.37499994Z\">\n        </path>\n    </g>\n</svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Gangguan Pengelihatan</div>\n            </div>\n\n   \n                     <div class=\"box_profile_aksesbilitas display_none_mobile\" id=\"action_kognitif_pembelajaran\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" width=\"17\" height=\"17\"><path fill=\"currentColor\" class=\"color_svg_content_profile_disabilitas\"  fill-rule=\"evenodd\" d=\"M3.4305674 2.28495811c0-.29900421-.0035071-.5816392.0006908-.86416789.0100965-.6746462.4400452-1.21600009 1.0909996-1.37910779.8740855-.2190182 1.7499778.45334269 1.7616153 1.35434135.0037729.29124478.0005845.58259585.0005845.88893433h.1520311c.6906493 0 1.3812986-.00031888 2.0719479.00015944.3570418.00021259.6691279.10900421.91208.38255108.1933733.21779582.2903522.47321957.2909368.76340147.0015941.7084476.0005313 1.4168952.0005313 2.1252896v.1565707c.2715941 0 .5314976-.0022853.7912949.0006378.254377.0028699.5002517.0418797.7295471.1649146.5329323.2859833.8426803.8785176.751281 1.448996-.1033024.6442993-.5548788 1.129849-1.1788385 1.2169567-.3001298.0418797-.6095589.0175916-.9148432.0229594-.0562744.0010098-.112655.0001063-.1784413.0001063v.161407c0 .6995721.0006377 1.3991442-.0002125 2.0987163-.000744.6465315-.4531174 1.1385651-1.0996612 1.159877-.5881439.0193986-1.1774569.0128615-1.766079.0028699-.3425349-.005793-.556101-.251172-.5632217-.5945007-.0040386-.1982378.0014348-.4022686-.0430958-.5930127-.1534127-.6571609-.7408127-1.1027973-1.4051581-1.0894574-.6564808.0132867-1.21763.4804476-1.3617434 1.1497791-.0368254.1711329-.0409171.3509819-.04469.5271637-.0077051.3596979-.2220153.5979553-.5828831.6018881-.6019069.006484-1.204239.0084504-1.8058802-.0078657-.51922249-.0140839-1.00156639-.4718909-1.02255635-.9932616-.0256662-.6364868-.01626057-1.2747805-.00797087-1.9120645.00334777-.2564336.23147406-.4753455.48739212-.4978266.16287144-.0143496.32717763-.0114266.49047418-.0220559.61556372-.0402854 1.12729352-.495063 1.26736832-1.1232589.1313599-.5889203-.1487896-1.2059553-.6753453-1.5050127-.2987482-.1696979-.61923025-.2269902-.95714199-.2183804-.23540635.0060056-.42771687-.0807301-.54106264-.2924671-.04410548-.0823777-.073332-.1834098-.07434164-.2763637-.00653612-.5755273-.00919307-1.1512672-.00138162-1.7267414.00903365-.65971191.50338699-1.12788258 1.18728759-1.13123083.6906493-.00334825 1.3812455-.00074406 2.0718948-.00074406h.1665911Z\"></path></svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Kognitif & Pembelajaran</div>\n            </div>\n\n              \n         \n                     <div class=\"box_profile_aksesbilitas \" id=\"action_kejang_dan_epilepsi\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 15\" width=\"17\" height=\"17\">\n                    <g fill=\"currentColor\" fill-rule=\"evenodd\">\n                    <path  class=\"color_svg_content_profile_disabilitas\"  d=\"M12.6685391 7.05850295c.0618316-.19052057.1261678-.37674459.1827945-.56531581.1901517-.63298661.0691105-1.20892447-.3105667-1.73811736-.2320249-.32343543-.5267033-.57804635-.8488928-.80063199-.4551274-.31444449-.949193-.54968111-1.4690478-.73240423-.0926691-.03258224-.1837338-.08716445-.25828386-.15209024-.11458409-.09985522-.15238745-.24005036-.15485288-.3932943-.00579182-.36170664-.02320641-.72257784-.15453982-1.06550692-.08781649-.22926918-.22419817-.41752213-.47082008-.47986202-.45430556-.11477383-.8951882-.08736337-1.29388448.1876562-.21590179.14894739-.35893623.34408279-.35870172.63298662.00293533 3.74608251.00187872 7.49216503.00273966 11.2382475.00003914.0758264.00113489.1539999.01823641.2270414.07020623.2999635.29510882.4285022.56403705.4781115.36421931.0671935.72820381.0273309 1.08487027-.065244.32899879-.0853742.51555014-.3113812.5669721-.6475074.02547618-.166253.03349863-.3357682.04156021-.5042092.01267939-.2651932.16279707-.4605275.41751974-.5162236.3201153-.070018.627747-.1711463.91589-.3323071.5559363-.3109436.9714602-.7461293 1.1581681-1.3741431.1915213-.64412581.1881558-1.2948954.0078268-1.94057279-.1229979-.44071558-.3600711-.80739509-.7503928-1.05416877-.4400217-.27820221-1.0393575-.32439023-1.4937022.10045196-.12542419.11728016-.22764196.26272665-.32821611.40431419-.10284392.14469061-.2257244.24852413-.40440984.26395991-.21410162.0184593-.38531248-.06810842-.49837035-.2509111-.11153164-.18041571-.10660077-.37018041-.00183929-.55588725.15594863-.27633241.35686213-.51300122.60242742-.71112034.83977457-.67758331 2.11737937-.75225592 2.98399987.105027.0788156.0779746.1591184.15427831.2494786.24172124M1.33117128 7.04079954c.2056487-.17345369.3867213-.36715691.60340577-.50166308.82568638-.51248404 1.65254678-.45718573 2.46034896.05283177.3388214.21395273.60047072.5097788.78749168.86702974.12812443.24466519.03557273.54371367-.19386939.68546034-.23312071.14405409-.53531276.08270877-.69713148-.14230363-.04418219-.06150445-.08515539-.1253561-.12922018-.18694012-.39161304-.54713499-.99051841-.71609321-1.57995337-.43383313-.40660133.194658-.67102917.52911332-.83085206.94894285-.22920731.60215483-.24004741 1.22260982-.12436757 1.84911182.10319612.5589903.37071554 1.022422.81320267 1.3731883.37259396.2953884.79117027.4946215 1.25623766.5918113.35564898.0743145.48698239.2434319.49559185.6144477.00273937.1157684.00994001.2318551.02344121.346788.04844778.413345.23711236.6374026.62892108.73686.3122886.0792874.63224746.1071752.95118883.068546.36985459-.0447558.67678185-.2368677.67549449-.7603319-.00931793-3.71962682-.00622635-7.43925366-.00227383-11.15884073.00031308-.26666515-.099361-.46725082-.29733945-.62618373-.3210546-.25775377-.69364857-.32208281-1.08866626-.28401052-.4610366.04443756-.66746798.22584784-.79148334.67869723-.08030279.29320039-.10080896.5928854-.10190471.89551435-.00105661.29439387-.12922017.46991628-.4022966.56519646-.1015525.03540683-.20314413.07121149-.30285733.11143206-.60665388.24446626-1.17757851.55011872-1.65943435 1.00730445-.30461836.28898339-.54990971.61906258-.6827302 1.02592288-.19367373.59320366-.01592751 1.14105475.18905592 1.67502159m5.66741207 7.44816506c-.28849519.2665458-.62625997.4362997-1.00632851.4715474-.33205123.0307522-.66985515.014481-1.00413701-.0017505-.2780073-.0135659-.5421612-.0983434-.79664902-.218289-.37952067-.1789438-.63486944-.472542-.77594718-.8643245-.07787649-.2162204-.12526765-.4441768-.17895938-.668672-.01487088-.0624194-.03592493-.093291-.09916533-.1123073-.86133737-.2591064-1.56739139-.7393264-2.05715228-1.5177993-.43810413-.6964007-.59831836-1.4663998-.5677939-2.28429758.01267938-.33958731.07337608-.67097934.17246314-.99477282.02034963-.06643753.01224891-.11620601-.02230633-.17500522C.36299833 7.6132365.14005244 7.0728646.04429176 6.48300271c-.1419387-.87446916.0588574-1.66336519.57718605-2.37030832.39568297-.53961602.89871026-.95666075 1.46685637-1.29473631.32939013-.19605041.67298586-.36305926 1.03728344-.48189095.05596149-.01826038.07294561-.04726215.07791561-.10454961.03197241-.36747517.09885226-.72751092.22916818-1.07370221.24924388-.6619486.72327294-1.04068235 1.4098774-1.1297564.48404734-.06281728.96347688-.02558043 1.4213045.16661103.27652022.11608667.5238074.27903765.73587406.49637195.51198895-.51646234 1.14141877-.69472977 1.83925467-.68800645.34484802.00334177.67232058.0711717.97768249.23861817.41622827.22823482.65948467.59913132.78897877 1.04342738.0864077.29654215.1285158.60684921.1819335.91250167.0133056.07658219.0311506.11811559.1103577.14663997.8877919.31965606 1.66957.80938425 2.2922688 1.53494581.7690596.89599174.9932969 1.9198459.6599934 3.06519721-.1189671.40873009-.2932304.79239693-.5023229 1.16015057-.0401514.07069432-.0512654.12985157-.0279025.21144642.2663454.92925029.2396952 1.84990746-.1370078 2.74152306-.4371258 1.0346354-1.217182 1.6900198-2.2678884 2.0190248-.1016699.0318662-.1391993.0773381-.1626014.1813307-.0513045.2279962-.1091053.4573051-.1935954.6742814-.2175454.558672-.66077611.8470189-1.21393393.9716589-.46424558.1046292-.93663102.1289763-1.40842945.0479782-.33056414-.0567702-.62716005-.195573-.88403504-.4174823-.01682758-.0146003-.03412477-.0287233-.05392653-.0453128\"></path><path d=\"M5.58862769 11.5399893c.01952782.1658154-.02504571.3549436-.19958295.494343-.16369715.1307268-.34711779.1524881-.5335126.0699783-.18248143-.0807992-.29084323-.2281155-.31072325-.4353051-.0243413-.253497-.04473006-.5075112-.07713294-.7599341-.01068356-.0833055-.04586494-.1660143-.08261169-.2426362-.11892795-.2480865-.334908-.3621045-.60309269-.3153993-.18979947.0330198-.36069726-.0008752-.49653106-.1398769-.14557815-.1489872-.19891767-.33019852-.13364231-.53802468.06895395-.21944279.22693755-.33206834.43974776-.3743974.6623023-.1316418 1.30765962.17520414 1.64788984.78197378.24525222.4373738.33060328.9156047.34919189 1.4592786M3.93288758 5.72742491c-.24458694.01965278-.45172273-.05553701-.57213777-.29662172-.16788448-.33616598.06222291-.73984364.43199924-.76474777.14624342-.00982639.29260425-.01929473.43845633-.03349725.40832322-.03974317.53734773-.30246982.50290989-.70944946-.00880513-.10375395-.01643625-.21443013.00888339-.31305208.06124457-.23798165.25945783-.37801765.50091406-.37809725.230577-.00007953.4363431.1438552.49441783.37702311.16694526.67070086-.00770938 1.46699651-.80960235 1.87349876-.31154506.15793834-.64167873.23523662-.99584062.24494366m4.48415915 5.69321559c.02066271-.5199235.12409363-1.0172105.41470205-1.45800561.34958323-.53034659.97153847-.78957233 1.58488422-.66286362.2862646.05915726.4635803.27903766.451801.5602236-.0108401.25823113-.2097969.47222373-.4707809.50062873-.0541222.0059276-.1106707-.0005968-.1650277-.0087523-.30289649-.0454719-.52138111.074235-.64199182.362383-.11607118.2772076-.12953325.5723574-.12972892.8677856-.0001174.1843144-.059327.3371606-.20224405.4523322-.15994029.1288968-.34003455.1508968-.52431613.0735985-.18068127-.0757468-.29397394-.2174934-.31569326-.4197102-.0094704-.0881988-.00160449-.178347-.00160449-.2676199m1.65053917-5.69259498c-.49437865-.01698732-.95506305-.14266168-1.33779269-.47461066-.49919217-.43295792-.61088035-.99672219-.47567269-1.62183178.06230119-.28778991.35048331-.4521333.62449895-.3891171.27773336.06389143.43892594.33791643.40006597.63752188-.0177668.13673402-.00277851.28281703.02387168.41927257.03467265.17731264.16706267.27748612.33506454.3064879.18541647.03202528.37439414.04459669.56231514.0592766.2284638.01786255.4087146.1603651.4714462.38167769.0620664.21904495-.0144012.44739912-.1947694.58154725-.1053094.07833264-.2178585.10562375-.4090277.09977565\"></path></g></svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">Kejang dan Epilepsi</div>\n            </div>\n           <div class=\"box_profile_aksesbilitas display_none_mobile\" id=\"action_adhd\">\n                <div class=\"icon_list_content_profile_disabilitas\">\n                    <span class=\"svg_icon_layout_dsb\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"17\" height=\"17\">\n    <g fill=\"none\" fill-rule=\"evenodd\" class=\"fill_icon_dsb\"  stroke=\"currentColor\" transform=\"translate(1 1)\">\n        <circle cx=\"7\" cy=\"7\" r=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></circle>\n        <circle cx=\"7\" cy=\"7\" r=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></circle>\n        <circle cx=\"7\" cy=\"7\" r=\"1\" fill=\"currentColor\"></circle>\n    </g>\n</svg>\n                    </span>\n\n                </div>\n                <div class=\"text_list_content_profile_disabilitas\">ADHD</div>\n            </div>\n\n              \n              </div>\n                 \n                </div>\n\n\n\n                <div class=\"content_daftar_action_disabilitas " + name_class_widget5 + "\">\n                    <div class=\"layout_grid_disabilitas\">\n                        <div class=\"box_group_disabilitas\" id=\"action_moda_suara\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg data-name=\"Layer 1\" width=\"55px\" height=\"55px\" id=\"Layer_1\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <defs>\n                                    </defs>\n                                    <line class=\"icon_svg_sroke_color\" x1=\"2.5\" x2=\"2.5\" y1=\"10.5\" y2=\"13.5\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"4.875\" x2=\"4.875\" y1=\"8\" y2=\"16\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"7.25\" x2=\"7.25\" y1=\"5.045\" y2=\"18.955\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"9.625\" x2=\"9.625\" y1=\"8.909\" y2=\"15.091\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"12\" x2=\"12\" y1=\"10\" y2=\"14\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"14.375\" x2=\"14.375\" y1=\"6.5\" y2=\"17.5\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"16.75\" x2=\"16.75\" y1=\"3.5\" y2=\"20.5\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"19.125\" x2=\"19.125\" y1=\"8.136\" y2=\"15.864\" />\n                                    <line class=\"icon_svg_sroke_color\" x1=\"21.5\" x2=\"21.5\" y1=\"10.455\" y2=\"13.545\" />\n                                </svg>\n                            </div>\n                           <div class=\"box_text_bottom_disabilitas\">" + my_website_jkt + "\n                            </div>\n                            <div class=\"box_column_action_strip\">\n\n                            </div>\n                        </div>\n                        <div class=\"box_group_disabilitas\" id=\"action_perbesar_text\">\n                            <div class=\"box_icon_disabilitas\">\n\n\n                                <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"55px\" height=\"55px\"  viewBox=\"0 0 234.000000 174.000000\" preserveAspectRatio=\"xMidYMid meet\">\n\n                                    <g transform=\"translate(0.000000,174.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\">\n                                        <path class=\"icon_svg_color\" d=\"M900 1470 l0 -100 250 0 250 0 0 -590 0 -590 95 0 95 0 0 590 0 590\n                                            248 2 247 3 3 98 3 97 -596 0 -595 0 0 -100z\" />\n                                        <path class=\"icon_svg_color\" d=\"M117 1173 c-4 -3 -7 -48 -7 -100 l0 -93 200 0 200 0 0 -395 0 -395 100 0 100 0 0 395 0 395 195 0 195 0 0 100 0 100 -488 0 c-269 0 -492 -3 -495-7z\" />\n                                    </g>\n                                </svg>\n\n                                <!--svg version=\"1.1\" width=\"60px\" height=\"60px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\">\n                                    <path class=\"icon_svg_color\" d=\"M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z\" />\n                                </svg-->\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\">\n                                Perbesar Teks\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_perbesar_text\">\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_3\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_4\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"box_group_disabilitas\" id=\"action_perkecil_text\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg version=\"1.1\" width=\"45px\" height=\"45px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\">\n                                    <path class=\"icon_svg_color\" d=\"M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z\" />\n                                </svg>\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"id_perkecil_text\">\n                                Perkecil Teks\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_perkecil_text\">\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_3\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_4\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"box_group_disabilitas\" id=\"action_grey_scale\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg version=\"1.1\" width=\"50px\" height=\"50px\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\">\n                                    <g style=\"isolation: isolate\">\n                                        <g data-name=\"Layer 1\" id=\"Layer_1\">\n                                            <path class=\"icon_svg_grey_scale_color_1\" d=\"M36.64843,0S4.58051,35.08224,4.58051,68.3789c0,18.46444,14.35732,32.8026,32.06792,32.8026S68.71635,86.84334,68.71635,68.3789C68.71635,35.08224,36.64843,0,36.64843,0Z\" />\n                                            <path class=\"icon_svg_grey_scale_color_2\" d=\"M36.64842,0s-.04336.04776-.11442.12681c7.72737,10.25554,23.909,34.51028,23.909,57.82942,0,16.9843-12.50526,30.1731-27.93125,30.1731-13.987,0-25.57232-10.84318-27.61209-25.527a55.61064,55.61064,0,0,0-.31916,5.77655c0,18.46443,14.35732,32.80255,32.06791,32.80255S68.71632,86.84334,68.71632,68.3789C68.71632,35.08225,36.64842,0,36.64842,0Z\" />\n                                            <circle class=\"icon_svg_grey_scale_color_4\" cx=\"22.88945\" cy=\"58.6888\" r=\"6.85099\" />\n                                            <path class=\"icon_svg_grey_scale_color_3\" d=\"M91.35157,26.81852S59.28365,61.90075,59.28365,95.1974C59.28365,113.66184,73.641,128,91.35157,128s32.06792-14.33816,32.06792-32.8026C123.41949,61.90075,91.35157,26.81852,91.35157,26.81852Z\" />\n                                            <path class=\"icon_svg_grey_scale_color_2\" d=\"M91.35156,26.8185s-.04336.04776-.11442.12681c7.72737,10.25554,23.909,34.51028,23.909,57.82942,0,16.9843-12.50526,30.1731-27.93125,30.1731-13.987,0-25.57232-10.84318-27.61209-25.527a55.61064,55.61064,0,0,0-.31916,5.77655C59.28365,113.66184,73.641,128,91.35156,128s32.06791-14.33812,32.06791-32.80255C123.41946,61.90075,91.35156,26.8185,91.35156,26.8185Z\" />\n                                            <circle class=\"icon_svg_grey_scale_color_4\" cx=\"77.59259\" cy=\"85.5073\" r=\"6.85099\" />\n                                        </g>\n                                    </g>\n                                </svg>\n\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_tulisan_grey_scale\">\n                                Kejenuhan\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                        <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_grey_scale\">\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_3\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"box_group_disabilitas\" id=\"action_kontras\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg id=\"svg_kontras_multi\" width=\"45px\" height=\"45px\" version=\"1.1\" viewBox=\"0 0 32 32\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                                    <path class=\"circle_multi\" d=\"M27,15.1c1.2,1.5,2,3.4,2,5.4c0,4.7-3.8,8.5-8.5,8.5S12,25.2,12,20.5s3.8-8.5,8.5-8.5c0.5,0,1,0,1.4,0.1\" />\n                                    <path class=\"circle_multi\" d=\"M19.7,22.6c-0.9,3.7-4.3,6.4-8.2,6.4C6.8,29,3,25.2,3,20.5c0-2.2,0.8-4.2,2.2-5.7\" />\n                                    <path class=\"circle_multi\" d=\"M10.5,12.1c0.3,0,0.7-0.1,1-0.1c3.5,0,6.4,2.1,7.8,5\" />\n                                    <path class=\"circle_single\" d=\"M9.7,17.5C8.4,16,7.7,14.1,7.7,12c0-4.7,3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5s-3.8,8.5-8.5,8.5c-0.3,0-0.6,0-0.9,0\" />\n                                </svg>\n                               \n                               \n    <svg id=\"svg_balikan_warna\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" width=\"50px\" height=\"50px\">\n          \n    <path class=\"active_icon_svg_color\" fill-rule=\"nonzero\"\n        d=\"m14.1 33.9-7.805 7.805a1 1 0 0 0 .708.295h33.994c.551 0 1.003-.451 1.003-1.003V7.003a1 1 0 0 0-.295-.708L33.9 14.1A13.956 13.956 0 0 1 38 24c0 7.732-6.268 14-14 14a13.956 13.956 0 0 1-9.9-4.1ZM4 7.002A3.006 3.006 0 0 1 7.003 4h33.994A3.006 3.006 0 0 1 44 7.003v33.994A3.006 3.006 0 0 1 40.997 44H7.003A3.006 3.006 0 0 1 4 40.997V7.003ZM33.9 14.1A13.956 13.956 0 0 0 24 10c-7.732 0-14 6.268-14 14 0 3.866 1.567 7.366 4.1 9.9l19.8-19.8Z\"\n        class=\"color000 svgShape\"></path>\n\n</svg>\n\n                               \n                               \n                                <svg id=\"svg_kontras_warna\" viewBox=\"0 0 512 512\" width=\"50px\" height=\"50px\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <circle class=\"icon_contrast_white\" cx=\"256\" cy=\"256\" r=\"208\" />\n                                    <path class=\"icon_contrast_black\" d=\"M256,464C141.12,464,48,370.88,48,256S141.12,48,256,48Z\" />\n                                </svg>\n\n\n                                <svg width=\"60px\" height=\"60px\" id=\"svg_kontras_klise\" style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                                    <g>\n                                        <path class=\"active_icon_svg_color\" d=\"M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z\" />\n                                        <g>\n                                            <path class=\"active_icon_svg_color\" d=\"M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z\" />\n                                        </g>\n                                    </g>\n                                </svg>\n\n                                <svg id=\"svg_kontras_light\" preserveAspectRatio=\"xMidYMid\" width=\"50px\" height=\"50px\" version=\"1.1\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\">\n                                        <path class=\"active_icon_svg_sroke_color\" d=\"M14.958 16.63l2.452-4.791v0c1.53-2.99.35-6.66-2.64-8.19 -2.99-1.54-6.66-.36-8.19 2.63 -.9 1.74-.9 3.8 0 5.54l2.452 4.79\" />\n                                        <path class=\"active_icon_svg_sroke_color\" d=\"M9.05 16.63v1.72 0c0 1.62 1.32 2.95 2.95 2.95v0h0c1.63-.001 2.95-1.33 2.95-2.96v-1.73\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"3.71\" x2=\"1.5\" y1=\"9.08\" y2=\"9.08\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"22.5\" x2=\"20.29\" y1=\"9.08\" y2=\"9.08\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"5.01\" x2=\"3.14\" y1=\"4.62\" y2=\"3.44\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"20.86\" x2=\"18.99\" y1=\"14.72\" y2=\"13.53\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"5.01\" x2=\"3.14\" y1=\"13.53\" y2=\"14.72\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"20.86\" x2=\"18.99\" y1=\"3.44\" y2=\"4.62\" />\n                                        <line class=\"active_icon_svg_sroke_color\" x1=\"11.25\" x2=\"14.96\" y1=\"16.63\" y2=\"16.63\" />\n                                    </g>\n                                </svg>\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_name_kontras\">\n                                Kontras+\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_kontras\">\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_3\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_4\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"box_group_disabilitas\" id=\"action_hidden_image\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg fill=\"none\" height=\"50px\" width=\"50px\" viewBox=\"0 0 64 64\"  xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path class=\"icon_svg_color\" clip-rule=\"evenodd\" d=\"M5.41421 2.58579C4.63316 1.80474 3.36683 1.80474 2.58579 2.58579C1.80474 3.36683 1.80474 4.63316 2.58579 5.41421L5.36029 8.18871C3.25416 10.8981 2 14.3026 2 18V46C2 54.8366 9.16344 62 18 62H46C49.6974 62 53.1019 60.7458 55.8113 58.6397L58.5858 61.4142C59.3668 62.1953 60.6332 62.1953 61.4142 61.4142C62.1953 60.6332 62.1953 59.3668 61.4142 58.5858L5.41421 2.58579ZM52.9531 55.7815L8.2185 11.0469C6.82158 13.0086 6 15.4083 6 18V46C6 46.3848 6.01811 46.7653 6.05352 47.1408L10.589 39.8841C15.6167 31.8397 27.0207 31.0191 33.1483 38.2609L49.4299 57.5027C50.7062 57.1227 51.8935 56.536 52.9531 55.7815Z\" fill=\"black\" fill-rule=\"evenodd\" />\n                                    <path class=\"icon_svg_color\" d=\"M58 46C58 47.2605 57.8057 48.4755 57.4453 49.6169L60.5322 52.7037C61.4743 50.6647 62 48.3937 62 46V18C62 9.16344 54.8366 2 46 2H18C15.6063 2 13.3353 2.52566 11.2963 3.46785L14.3831 6.55468C15.5245 6.19434 16.7395 6 18 6H46C52.6274 6 58 11.3726 58 18V46Z\" fill=\"black\" />\n                                    <path class=\"icon_svg_color\" d=\"M43 17C39.6863 17 37 19.6863 37 23C37 26.3137 39.6863 29 43 29C46.3137 29 49 26.3137 49 23C49 19.6863 46.3137 17 43 17Z\" fill=\"black\" />\n                                </svg>\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\">\n                                Sembunyikan Gambar\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\">\n\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"box_group_disabilitas\" id=\"action_perataan_text\">\n                            <div class=\"box_icon_disabilitas\">\n\n\n                                <svg id=\"svg_left_text_icon\"  height=\"55px\" width=\"55px\" viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <rect fill=\"none\" height=\"60\" width=\"60\" />\n                                    <line fill=\"none\" class=\"icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"68\" y2=\"68\" />\n                                    <line fill=\"none\" class=\"icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"168\" y1=\"108\" y2=\"108\" />\n                                    <line fill=\"none\" class=\"icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"148\" y2=\"148\" />\n                                    <line fill=\"none\" class=\"icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"168\" y1=\"188\" y2=\"188\" />\n                                </svg>\n\n                                <svg class=\"hidden_svg\"  height=\"55px\" width=\"55px\" id=\"svg_center_text_icon\" viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <rect fill=\"none\" height=\"60\" width=\"60\" />\n                                    <path class=\"active_icon_svg_color\" d=\"M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z\" />\n                                    <path class=\"active_icon_svg_color\" d=\"M64,100a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z\" />\n                                    <path class=\"active_icon_svg_color\" d=\"M216,140H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z\" />\n                                    <path class=\"active_icon_svg_color\" d=\"M192,180H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z\" />\n                                </svg>\n\n\n                                <svg class=\"hidden_svg\"  height=\"55px\" width=\"55px\" id=\"svg_right_text_icon\" viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <rect fill=\"none\" height=\"60\" width=\"60\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"68\" y2=\"68\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"88\" x2=\"216\" y1=\"108\" y2=\"108\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"148\" y2=\"148\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"88\" x2=\"216\" y1=\"188\" y2=\"188\" />\n                                </svg>\n\n\n                                <svg class=\"hidden_svg\" height=\"55px\" width=\"55px\" id=\"svg_right_left_text_icon\" viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <rect fill=\"none\" height=\"60\" width=\"60\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"68\" y2=\"68\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"108\" y2=\"108\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"148\" y2=\"148\" />\n                                    <line fill=\"none\" class=\"active_icon_svg_sroke_color\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" x1=\"40\" x2=\"216\" y1=\"188\" y2=\"188\" />\n                                </svg>\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_rata_tulisan\">\n                                Rata Tulisan\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_perataan_text\">\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_3\"></div>\n                                    <div class=\"strip_loading_unprocess_v4\" id=\"strip_loading_4\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"box_group_disabilitas\" id=\"action_tulisan_dapat_di_baca\">\n                            <div class=\"box_icon_disabilitas\">\n                           \n\n\n\n\n\n<svg version=\"1.0\" id=\"svg_dy_seleksia\" xmlns=\"http://www.w3.org/2000/svg\"\n height=\"50\" width=\"50\"  viewBox=\"0 0 100.000000 74.000000\">\n\n<g transform=\"translate(0.000000,74.000000) scale(0.100000,-0.100000)\"\nfill=\"#000000\" stroke=\"none\">\n<path  class=\"icon_svg_color\" d=\"M795 682 c-37 -23 -53 -54 -57 -112 -3 -44 -4 -45 -41 -48 -34 -3\n-37 -6 -37 -33 0 -27 3 -29 35 -29 l36 0 -6 -173 c-3 -94 -8 -184 -10 -199 -4\n-28 -4 -28 49 -28 l54 0 -4 108 c-2 59 -6 149 -9 200 l-4 92 59 0 c60 0 60 0\n60 30 l0 30 -60 0 -60 0 0 38 c0 21 7 48 16 61 14 20 22 22 54 17 29 -5 39 -2\n44 10 10 26 7 32 -25 43 -44 15 -59 14 -94 -7z\"/>\n<path  class=\"icon_svg_color\" d=\"M55 365 l0 -305 111 0 c180 0 263 23 342 95 54 48 86 117 90 195 8\n142 -74 256 -219 301 -47 15 -91 19 -192 19 l-132 0 0 -305z m304 234 c200\n-46 233 -291 51 -385 -27 -13 -65 -19 -160 -22 l-126 -4 -3 191 c-1 105 0 200\n4 211 6 18 15 20 98 20 51 0 112 -5 136 -11z\"/>\n</g>\n</svg>\n\n        <svg  id=\"svg_font_di_perbesar\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"50\" width=\"50\" viewBox=\"0 0 448 448\">\n                                    <path class=\"active_icon_svg_color\" d=\"M181.25 139.75l-42.5 112.5c24.75 0.25 49.5 1 74.25 1 4.75 0 9.5-0.25 14.25-0.5-13-38-28.25-76.75-46-113zM0 416l0.5-19.75c23.5-7.25 49-2.25 59.5-29.25l59.25-154 70-181h32c1 1.75 2 3.5 2.75 5.25l51.25 120c18.75 44.25 36 89 55 133 11.25 26 20 52.75 32.5 78.25 1.75 4 5.25 11.5 8.75 14.25 8.25 6.5 31.25 8 43 12.5 0.75 4.75 1.5 9.5 1.5 14.25 0 2.25-0.25 4.25-0.25 6.5-31.75 0-63.5-4-95.25-4-32.75 0-65.5 2.75-98.25 3.75 0-6.5 0.25-13 1-19.5l32.75-7c6.75-1.5 20-3.25 20-12.5 0-9-32.25-83.25-36.25-93.5l-112.5-0.5c-6.5 14.5-31.75 80-31.75 89.5 0 19.25 36.75 20 51 22 0.25 4.75 0.25 9.5 0.25 14.5 0 2.25-0.25 4.5-0.5 6.75-29 0-58.25-5-87.25-5-3.5 0-8.5 1.5-12 2-15.75 2.75-31.25 3.5-47 3.5z\"></path>\n                                </svg>\n\n\n\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\"  id=\"text_tulisan_dapat_di_baca\">\n                                Ramah Disleksia\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_tulisan_dapat_dibaca\">\n                                    <div class=\"strip_loading_unprocess_v2\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v2\" id=\"strip_loading_2\"></div>\n                             \n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"box_group_disabilitas\" id=\"action_tulisan_line_height\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg fill=\"none\" height=\"50\" width=\"50\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path class=\"icon_svg_color\" d=\"M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z\" fill=\"currentColor\" />\n                                    <path class=\"icon_svg_color\" d=\"M22.8412 7H8.84119V5H22.8412V7Z\" fill=\"currentColor\" />\n                                    <path class=\"icon_svg_color\" d=\"M22.8412 11H8.84119V9H22.8412V11Z\" fill=\"currentColor\" />\n                                    <path class=\"icon_svg_color\" d=\"M8.84119 15H22.8412V13H8.84119V15Z\" fill=\"currentColor\" />\n                                    <path class=\"icon_svg_color\" d=\"M22.8412 19H8.84119V17H22.8412V19Z\" fill=\"currentColor\" />\n                                </svg>\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_id_tinggi_garis\">\n                                Tinggi Garis\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_tulisan_line_height\">\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_3\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                        <div class=\"box_group_disabilitas\" id=\"action_animate_pause\">\n                            <div class=\"box_icon_disabilitas\">\n\n                                <svg height=\"40\" width=\"40\" id=\"svg_animasi_pause\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\">\n                                    <defs id=\"defs19\" />\n                                    <g id=\"g2998\" transform=\"matrix(10.666667,0,0,10.666667,-13434.667,-10410.667)\">\n                                        <g id=\"g3\">\n                                            <path class=\"icon_svg_color\" d=\"m 1293,987 c 0,2.812 -3.311,5.562 -5.973,7.771 -1.203,0.998 -2.48,1.995 -3.527,3.229 -1.046,-1.233 -2.324,-2.23 -3.527,-3.229 -2.658,-2.209 -5.973,-4.959 -5.973,-7.771 0,0 7.436,3.399 9.5,3.399 2.064,0 9.5,-3.399 9.5,-3.399 z\" id=\"path5\" />\n                                            <path class=\"icon_svg_color\" d=\"m 1283.5,1006 c 1.051,0.927 2.322,1.684 3.526,2.436 2.663,1.658 5.974,3.728 5.974,5.839 V 1018 h -19 v -3.727 c 0,-2.111 3.311,-4.181 5.973,-5.839 1.205,-0.75 2.481,-1.507 3.527,-2.434\" id=\"path7\" />\n                                            <g id=\"g9\">\n                                                <path class=\"icon_svg_color\" d=\"m 1294,981 v 6.517 c 0,3.725 -3.01,6.452 -5.208,8.444 -1.621,1.469 -2.792,2.53 -2.792,4.039 0,1.509 1.172,2.57 2.793,4.04 2.197,1.991 5.207,4.72 5.207,8.442 V 1019 h -21 v -6.518 c 0,-3.724 3.01,-6.451 5.207,-8.442 1.621,-1.47 2.793,-2.531 2.793,-4.04 0,-1.509 -1.171,-2.57 -2.792,-4.039 -2.198,-1.992 -5.208,-4.72 -5.208,-8.444 V 981 h 21 m 2,-2 h -25 c 0,0 0,1.542 0,8.517 0,6.977 8,10.647 8,12.483 0,1.836 -8,5.508 -8,12.482 0,6.976 0,8.518 0,8.518 h 25 c 0,0 0,-1.542 0,-8.518 0,-6.976 -8,-10.646 -8,-12.482 0,-1.835 8,-5.507 8,-12.483 0,-6.975 0,-8.517 0,-8.517 l 0,0 z\" id=\"path11\" />\n                                            </g>\n                                            <rect class=\"icon_svg_sroke_color\" height=\"2\" id=\"rect13\" width=\"29\" x=\"1269\" y=\"976\" />\n                                            <rect class=\"icon_svg_sroke_color\" height=\"2\" id=\"rect15\" width=\"29\" x=\"1269\" y=\"1022\" />\n                                        </g>\n                                    </g>\n                                </svg>\n\n                                <svg class=\"hidden_svg\" id=\"svg_animasi_play\" version=\"1.1\" height=\"50\" width=\"50\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                                    <g>\n                                        <g>\n                                            <path class=\"active_icon_svg_color\" d=\"M224.6,366C224.6,366,224.6,366,224.6,366c-18.8,0-33.6-14-33.6-31.9V215.8c0-18,15-32.6,33.8-32.6    c7.2,0,13.9,2.2,19.6,6.5l81.1,59c8.2,6.1,12.8,15.4,12.8,25.5c0,10.5-5.1,20.5-13.6,26.9l-80.5,58.9    C238.6,364.1,231.8,366,224.6,366z M225,217.4v115.1l78.7-57.8L225,217.4z\" />\n                                        </g>\n                                        <g>\n                                            <path class=\"active_icon_svg_color\" d=\"M262,65c12.4,0,22.4,10.1,22.4,22.4s-10.1,22.4-22.4,22.4s-22.4-10.1-22.4-22.4S249.6,65,262,65 M262,31    c-31.2,0-56.4,25.3-56.4,56.4s25.3,56.4,56.4,56.4s56.4-25.3,56.4-56.4S293.2,31,262,31L262,31z\" />\n                                        </g>\n                                        <g>\n                                            <path class=\"active_icon_svg_color\" d=\"M256.1,481c-9.4,0-17-7.6-17-17s7.6-17,17-17c6.6,0,13.2-0.4,19.7-1.1c9.3-1.1,17.8,5.7,18.8,15c1.1,9.3-5.7,17.8-15,18.8    C271.9,480.6,263.9,481,256.1,481z M342.5,460.3c-6.2,0-12.2-3.4-15.2-9.3c-4.3-8.4-1-18.6,7.4-22.9c5.8-3,11.5-6.3,17-10    c7.8-5.2,18.4-3.1,23.6,4.8c5.2,7.8,3.1,18.4-4.8,23.6c-6.5,4.3-13.4,8.3-20.3,11.9C347.7,459.7,345.1,460.3,342.5,460.3z     M410,402.5c-3.5,0-7-1.1-10-3.2c-7.6-5.5-9.3-16.2-3.8-23.8c3.9-5.3,7.4-10.9,10.6-16.6c4.6-8.2,15-11.1,23.2-6.4    c8.2,4.6,11.1,15,6.4,23.2c-3.8,6.8-8.1,13.5-12.7,19.8C420.4,400.1,415.2,402.5,410,402.5z M443.9,320.4c-0.9,0-1.8-0.1-2.6-0.2    c-9.3-1.4-15.6-10.1-14.2-19.4c1-6.5,1.7-13.1,1.9-19.6c0.4-9.4,8.4-16.7,17.7-16.3c9.4,0.4,16.7,8.3,16.3,17.7    c-0.3,7.8-1.1,15.7-2.3,23.4C459.4,314.4,452.2,320.4,443.9,320.4z M436.8,231.8c-7.2,0-13.8-4.6-16.2-11.7    c-2-6.2-4.4-12.4-7.2-18.3c-3.9-8.5-0.2-18.6,8.4-22.6c8.6-3.9,18.6-0.2,22.6,8.4c3.3,7.1,6.2,14.5,8.6,22    c2.9,8.9-2,18.5-10.9,21.5C440.4,231.6,438.6,231.8,436.8,231.8z M390.2,156.2c-4.3,0-8.7-1.7-12-5c-4.6-4.6-9.6-9-14.7-13.1    c-7.4-5.8-8.6-16.5-2.8-23.9c5.8-7.4,16.5-8.6,23.9-2.8c6.1,4.9,12.1,10.1,17.6,15.7c6.7,6.6,6.7,17.4,0.1,24.1    C398.9,154.5,394.6,156.2,390.2,156.2z M314.4,109.9c-1.7,0-3.5-0.3-5.2-0.8c-3.1-1-6.2-1.9-9.3-2.7c-9.1-2.4-14.5-11.7-12.2-20.8    c2.4-9.1,11.7-14.5,20.8-12.2c3.7,1,7.5,2.1,11.1,3.2c8.9,2.9,13.9,12.5,11,21.4C328.3,105.3,321.6,109.9,314.4,109.9z\" />\n                                        </g>\n                                        <g>\n                                            <path class=\"active_icon_svg_color\" d=\"M256.1,481C141.9,481,49,388.1,49,273.9C49,176.9,114.8,94,209.2,72.1c9.1-2.1,18.3,3.6,20.4,12.7    c2.1,9.2-3.6,18.3-12.7,20.4C138,123.5,83,192.9,83,273.9C83,369.3,160.6,447,256.1,447c9.4,0,17,7.6,17,17S265.5,481,256.1,481z\" />\n                                        </g>\n                                    </g>\n                                </svg>\n\n\n\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_id_animasi\">\n                                Animasi Dijeda\n                            </div>\n                            <div class=\"box_column_action_strip\">\n\n                            </div>\n                        </div>\n\n\n\n\n                        <div class=\"box_group_disabilitas display_none_mobile\" id=\"action_kursor\">\n                            <div class=\"box_icon_disabilitas\">\n\n                                <svg width=\"50\" height=\"50\" id=\"svg_kursor_web\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path class=\"icon_svg_color\" d=\"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z\" />\n                                </svg>\n                    \n   \n\n\n<svg version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" id=\"svg_kursor_masker\"  viewBox=\"15 -10 80 100\"> \n    <path d=\"M0 0 C1.22237869 -0.01029488 1.22237869 -0.01029488 2.4694519 -0.02079773 C5.16600921 -0.03911514 7.86198752 -0.03522165 10.55859375 -0.02954102 C12.43042186 -0.03410014 14.30224829 -0.0394049 16.17407227 -0.04542542 C20.09821368 -0.05436598 24.02215169 -0.05192229 27.94628906 -0.04199219 C32.98059567 -0.03049555 38.01420161 -0.05071973 43.04841614 -0.07990932 C46.91398596 -0.09823438 50.77938668 -0.09798637 54.64498901 -0.0922718 C56.5013833 -0.09211817 58.35778874 -0.09819742 60.21414185 -0.11056328 C62.8072742 -0.12540376 65.39909679 -0.11484867 67.9921875 -0.09765625 C69.14713211 -0.1121582 69.14713211 -0.1121582 70.32540894 -0.12695312 C75.49496442 -0.05500331 75.49496442 -0.05500331 77.97802734 2.21958923 C79.46734992 5.41522637 79.28081963 8.15392112 79.18359375 11.65405273 C79.14298828 13.54897461 79.14298828 13.54897461 79.1015625 15.48217773 C79.06675781 16.44639648 79.03195313 17.41061523 78.99609375 18.40405273 C80.97609375 18.89905273 80.97609375 18.89905273 82.99609375 19.40405273 C82.99609375 30.95405273 82.99609375 42.50405273 82.99609375 54.40405273 C81.67609375 54.40405273 80.35609375 54.40405273 78.99609375 54.40405273 C79.04830078 55.85038086 79.04830078 55.85038086 79.1015625 57.32592773 C79.12863281 58.58920898 79.15570313 59.85249023 79.18359375 61.15405273 C79.23580078 63.03350586 79.23580078 63.03350586 79.2890625 64.95092773 C78.96661321 68.75153009 78.77036524 69.86270061 75.99609375 72.40405273 C73.19833853 72.80134239 70.79138179 72.94090954 67.9921875 72.90576172 C67.17726837 72.9111647 66.36234924 72.91656769 65.5227356 72.9221344 C62.82598679 72.93465324 60.13029905 72.91811024 57.43359375 72.90014648 C55.56176701 72.9003014 53.68993994 72.90178913 51.81811523 72.90455627 C47.89389884 72.90594168 43.97004732 72.89335863 40.04589844 72.87060547 C35.01166889 72.8422204 29.97804579 72.84495626 24.94377136 72.85769558 C21.07819423 72.86464519 17.21275767 72.8568717 13.34719849 72.84443855 C11.49081969 72.83991706 9.63442584 72.83959332 7.77804565 72.84350395 C5.18504824 72.84640916 2.59289131 72.82994281 0 72.80810547 C-1.15494461 72.81485794 -1.15494461 72.81485794 -2.33322144 72.82174683 C-7.4778041 72.74963131 -7.4778041 72.74963131 -9.98583984 71.10218811 C-11.72773447 68.19670682 -11.31076421 64.99430598 -11.19140625 61.71655273 C-11.17110352 60.66371094 -11.17110352 60.66371094 -11.15039062 59.58959961 C-11.11510807 57.86075445 -11.06130208 56.13230508 -11.00390625 54.40405273 C-12.32390625 54.40405273 -13.64390625 54.40405273 -15.00390625 54.40405273 C-15.00390625 42.85405273 -15.00390625 31.30405273 -15.00390625 19.40405273 C-13.68390625 19.07405273 -12.36390625 18.74405273 -11.00390625 18.40405273 C-11.05611328 16.83204102 -11.05611328 16.83204102 -11.109375 15.22827148 C-11.13751562 13.84938127 -11.16481549 12.47047371 -11.19140625 11.09155273 C-11.21654297 10.40125977 -11.24167969 9.7109668 -11.26757812 8.99975586 C-11.34053757 3.96555398 -11.34053757 3.96555398 -9.98583984 1.70591736 C-6.87212761 -0.33937408 -3.60483981 -0.02107597 0 0 Z M-7.00390625 30.40405273 C-7.00390625 34.36405273 -7.00390625 38.32405273 -7.00390625 42.40405273 C20.05609375 42.40405273 47.11609375 42.40405273 74.99609375 42.40405273 C74.99609375 38.44405273 74.99609375 34.48405273 74.99609375 30.40405273 C47.93609375 30.40405273 20.87609375 30.40405273 -7.00390625 30.40405273 Z \" fill=\"" + bg_color_icon + "\" transform=\"translate(22.00390625,6.595947265625)\"/>\n    <path d=\"M0 0 C1.22237869 -0.01029488 1.22237869 -0.01029488 2.4694519 -0.02079773 C5.16600921 -0.03911514 7.86198752 -0.03522165 10.55859375 -0.02954102 C12.43042186 -0.03410014 14.30224829 -0.0394049 16.17407227 -0.04542542 C20.09821368 -0.05436598 24.02215169 -0.05192229 27.94628906 -0.04199219 C32.98059567 -0.03049555 38.01420161 -0.05071973 43.04841614 -0.07990932 C46.91398596 -0.09823438 50.77938668 -0.09798637 54.64498901 -0.0922718 C56.5013833 -0.09211817 58.35778874 -0.09819742 60.21414185 -0.11056328 C62.8072742 -0.12540376 65.39909679 -0.11484867 67.9921875 -0.09765625 C69.14713211 -0.1121582 69.14713211 -0.1121582 70.32540894 -0.12695312 C75.49496442 -0.05500331 75.49496442 -0.05500331 77.97802734 2.21958923 C79.46734992 5.41522637 79.28081963 8.15392112 79.18359375 11.65405273 C79.14298828 13.54897461 79.14298828 13.54897461 79.1015625 15.48217773 C79.06675781 16.44639648 79.03195313 17.41061523 78.99609375 18.40405273 C80.97609375 18.89905273 80.97609375 18.89905273 82.99609375 19.40405273 C82.99609375 30.95405273 82.99609375 42.50405273 82.99609375 54.40405273 C81.67609375 54.40405273 80.35609375 54.40405273 78.99609375 54.40405273 C79.04830078 55.85038086 79.04830078 55.85038086 79.1015625 57.32592773 C79.12863281 58.58920898 79.15570313 59.85249023 79.18359375 61.15405273 C79.23580078 63.03350586 79.23580078 63.03350586 79.2890625 64.95092773 C78.96661321 68.75153009 78.77036524 69.86270061 75.99609375 72.40405273 C73.19833853 72.80134239 70.79138179 72.94090954 67.9921875 72.90576172 C67.17726837 72.9111647 66.36234924 72.91656769 65.5227356 72.9221344 C62.82598679 72.93465324 60.13029905 72.91811024 57.43359375 72.90014648 C55.56176701 72.9003014 53.68993994 72.90178913 51.81811523 72.90455627 C47.89389884 72.90594168 43.97004732 72.89335863 40.04589844 72.87060547 C35.01166889 72.8422204 29.97804579 72.84495626 24.94377136 72.85769558 C21.07819423 72.86464519 17.21275767 72.8568717 13.34719849 72.84443855 C11.49081969 72.83991706 9.63442584 72.83959332 7.77804565 72.84350395 C5.18504824 72.84640916 2.59289131 72.82994281 0 72.80810547 C-1.15494461 72.81485794 -1.15494461 72.81485794 -2.33322144 72.82174683 C-7.4778041 72.74963131 -7.4778041 72.74963131 -9.98583984 71.10218811 C-11.72773447 68.19670682 -11.31076421 64.99430598 -11.19140625 61.71655273 C-11.17110352 60.66371094 -11.17110352 60.66371094 -11.15039062 59.58959961 C-11.11510807 57.86075445 -11.06130208 56.13230508 -11.00390625 54.40405273 C-12.32390625 54.40405273 -13.64390625 54.40405273 -15.00390625 54.40405273 C-15.00390625 42.85405273 -15.00390625 31.30405273 -15.00390625 19.40405273 C-13.68390625 19.07405273 -12.36390625 18.74405273 -11.00390625 18.40405273 C-11.05611328 16.83204102 -11.05611328 16.83204102 -11.109375 15.22827148 C-11.13751562 13.84938127 -11.16481549 12.47047371 -11.19140625 11.09155273 C-11.21654297 10.40125977 -11.24167969 9.7109668 -11.26757812 8.99975586 C-11.34053757 3.96555398 -11.34053757 3.96555398 -9.98583984 1.70591736 C-6.87212761 -0.33937408 -3.60483981 -0.02107597 0 0 Z M-7.96289062 2.69125366 C-9.80054001 5.71476655 -9.30804382 9.16719344 -9.19140625 12.59155273 C-9.17787109 13.34114258 -9.16433594 14.09073242 -9.15039062 14.86303711 C-9.11509164 16.7103504 -9.06128542 18.5572934 -9.00390625 20.40405273 C-10.65390625 20.73405273 -12.30390625 21.06405273 -14.00390625 21.40405273 C-14.00390625 31.63405273 -14.00390625 41.86405273 -14.00390625 52.40405273 C-12.35390625 52.40405273 -10.70390625 52.40405273 -9.00390625 52.40405273 C-9.03871094 53.52424805 -9.07351562 54.64444336 -9.109375 55.79858398 C-9.13751464 57.27122524 -9.16481462 58.74388271 -9.19140625 60.21655273 C-9.21654297 60.95454102 -9.24167969 61.6925293 -9.26757812 62.45288086 C-9.38280491 66.46256713 -9.38280491 66.46256713 -7.96289062 70.11685181 C-4.94629495 72.09898336 -1.85856613 71.82117876 1.6328125 71.79223633 C2.40871735 71.79749329 3.18462219 71.80275024 3.98403931 71.8081665 C6.55076177 71.82137858 9.11686489 71.8126244 11.68359375 71.80249023 C13.46574015 71.80451063 15.24788574 71.80742178 17.0300293 71.81118774 C20.7658678 71.81561272 24.50149118 71.80917449 28.23730469 71.79516602 C33.02938459 71.77807397 37.82096045 71.78791423 42.61302185 71.80588341 C46.29329231 71.81671658 49.973443 71.81327706 53.65371704 71.80550003 C55.42078714 71.80349673 57.18786807 71.80596185 58.95492554 71.81293869 C61.42336899 71.82054559 63.8909927 71.80896026 66.359375 71.79223633 C67.09193512 71.79830902 67.82449524 71.80438171 68.57925415 71.81063843 C71.46095257 71.77441181 73.50949494 71.72378496 75.95507812 70.11685181 C77.79272751 67.09333892 77.30023132 63.64091203 77.18359375 60.21655273 C77.17005859 59.46696289 77.15652344 58.71737305 77.14257812 57.94506836 C77.10727914 56.09775507 77.05347292 54.25081207 76.99609375 52.40405273 C78.64609375 52.40405273 80.29609375 52.40405273 81.99609375 52.40405273 C81.99609375 42.17405273 81.99609375 31.94405273 81.99609375 21.40405273 C80.34609375 21.07405273 78.69609375 20.74405273 76.99609375 20.40405273 C77.03089844 19.28385742 77.06570312 18.16366211 77.1015625 17.00952148 C77.12970214 15.53688023 77.15700212 14.06422276 77.18359375 12.59155273 C77.20873047 11.85356445 77.23386719 11.11557617 77.25976562 10.35522461 C77.37499241 6.34553834 77.37499241 6.34553834 75.95507812 2.69125366 C72.93848245 0.70912211 69.85075363 0.98692671 66.359375 1.01586914 C65.58347015 1.01061218 64.80756531 1.00535522 64.00814819 0.99993896 C61.44142573 0.98672689 58.87532261 0.99548107 56.30859375 1.00561523 C54.52644735 1.00359484 52.74430176 1.00068369 50.9621582 0.99691772 C47.2263197 0.99249274 43.49069632 0.99893098 39.75488281 1.01293945 C34.96280291 1.0300315 30.17122705 1.02019124 25.37916565 1.00222206 C21.69889519 0.99138889 18.0187445 0.9948284 14.33847046 1.00260544 C12.57140036 1.00460874 10.80431943 1.00214361 9.03726196 0.99516678 C6.56881851 0.98755988 4.1011948 0.99914521 1.6328125 1.01586914 C0.90025238 1.00979645 0.16769226 1.00372375 -0.58706665 0.99746704 C-3.46876507 1.03369366 -5.51730744 1.08432051 -7.96289062 2.69125366 Z \" fill=\"" + bg_color_icon + "\" transform=\"translate(22.00390625,6.595947265625)\"/>\n    <path d=\"M0 0 C28.38 0 56.76 0 86 0 C86 5.28 86 10.56 86 16 C57.62 16 29.24 16 0 16 C0 10.72 0 5.44 0 0 Z M2 2 C2 5.96 2 9.92 2 14 C29.06 14 56.12 14 84 14 C84 10.04 84 6.08 84 2 C56.94 2 29.88 2 2 2 Z \" fill=\"#FEFEFE\" transform=\"translate(13,35)\"/>\n    <path d=\"M0 0 C0.99 0 1.98 0 3 0 C3.33 3.3 3.66 6.6 4 10 C26.44 10 48.88 10 72 10 C72.33 6.7 72.66 3.4 73 0 C73.99 0 74.98 0 76 0 C76 4.62 76 9.24 76 14 C50.92 14 25.84 14 0 14 C0 9.38 0 4.76 0 0 Z \" fill=\"#FDFDFE\" transform=\"translate(18,59)\"/>\n    <path d=\"M0 0 C25.08 0 50.16 0 76 0 C76 4.62 76 9.24 76 14 C75.01 14 74.02 14 73 14 C72.67 10.7 72.34 7.4 72 4 C63.28155997 3.97687389 54.56313044 3.95908354 45.84466648 3.94818783 C41.79674258 3.94295959 37.74883959 3.93586301 33.70092773 3.92456055 C29.79764029 3.91372957 25.89437301 3.90772272 21.9910717 3.90512276 C20.49866353 3.90326889 19.00625652 3.899649 17.51385689 3.89426994 C15.43051861 3.88705669 13.34726469 3.88600917 11.26391602 3.88647461 C9.48187523 3.88314369 9.48187523 3.88314369 7.66383362 3.87974548 C5.07879307 3.69637405 5.07879307 3.69637405 4 5 C3.76807135 6.51469448 3.58784762 8.03754562 3.4375 9.5625 C3.35371094 10.38878906 3.26992188 11.21507812 3.18359375 12.06640625 C3.12300781 12.70449219 3.06242187 13.34257812 3 14 C2.01 14 1.02 14 0 14 C0 9.38 0 4.76 0 0 Z \" fill=\"#F6FAFE\" transform=\"translate(18,13)\"/>\n    <path d=\"M0 0 C1.22237869 -0.01029488 1.22237869 -0.01029488 2.4694519 -0.02079773 C5.16600921 -0.03911514 7.86198752 -0.03522165 10.55859375 -0.02954102 C12.43042186 -0.03410014 14.30224829 -0.0394049 16.17407227 -0.04542542 C20.09821368 -0.05436598 24.02215169 -0.05192229 27.94628906 -0.04199219 C32.98059567 -0.03049555 38.01420161 -0.05071973 43.04841614 -0.07990932 C46.91398596 -0.09823438 50.77938668 -0.09798637 54.64498901 -0.0922718 C56.5013833 -0.09211817 58.35778874 -0.09819742 60.21414185 -0.11056328 C62.8072742 -0.12540376 65.39909679 -0.11484867 67.9921875 -0.09765625 C69.14713211 -0.1121582 69.14713211 -0.1121582 70.32540894 -0.12695312 C75.49496442 -0.05500331 75.49496442 -0.05500331 77.97802734 2.21958923 C79.46734992 5.41522637 79.28081963 8.15392112 79.18359375 11.65405273 C79.14298828 13.54897461 79.14298828 13.54897461 79.1015625 15.48217773 C79.06675781 16.44639648 79.03195313 17.41061523 78.99609375 18.40405273 C80.97609375 18.89905273 80.97609375 18.89905273 82.99609375 19.40405273 C82.50109375 20.88905273 82.50109375 20.88905273 81.99609375 22.40405273 C80.34609375 21.74405273 78.69609375 21.08405273 76.99609375 20.40405273 C76.94710937 19.27225586 76.898125 18.14045898 76.84765625 16.97436523 C76.77262861 15.49256935 76.69708078 14.01079973 76.62109375 12.52905273 C76.59015625 11.78268555 76.55921875 11.03631836 76.52734375 10.26733398 C76.43965544 5.86932085 76.43965544 5.86932085 73.99609375 2.40405273 C71.44721251 2.20573757 69.00699154 2.13127011 66.45703125 2.14526367 C65.67966614 2.14175903 64.90230103 2.13825439 64.10137939 2.13464355 C61.52452743 2.12582068 58.94794865 2.13167728 56.37109375 2.13842773 C54.58512316 2.13708124 52.79915293 2.13514084 51.01318359 2.13262939 C47.26721716 2.12967738 43.521346 2.13397824 39.77539062 2.14331055 C34.96646542 2.15470514 30.15776344 2.14814608 25.34884644 2.13616562 C21.66005767 2.1289491 17.97132208 2.13123399 14.28253174 2.1364212 C12.50905328 2.13775828 10.73557004 2.13610797 8.96209717 2.1314621 C6.4863195 2.12640024 4.01090665 2.13410211 1.53515625 2.14526367 C0.42856659 2.13919098 0.42856659 2.13919098 -0.70037842 2.13299561 C-4.80460381 2.04236221 -4.80460381 2.04236221 -8.00390625 4.40405273 C-8.31029215 7.13840235 -8.51523985 9.78685094 -8.62890625 12.52905273 C-8.66757813 13.2831543 -8.70625 14.03725586 -8.74609375 14.81420898 C-8.84041656 16.67708458 -8.92325287 18.54053528 -9.00390625 20.40405273 C-10.98390625 21.06405273 -12.96390625 21.72405273 -15.00390625 22.40405273 C-14.67390625 21.08405273 -14.34390625 19.76405273 -14.00390625 18.40405273 C-13.01390625 18.40405273 -12.02390625 18.40405273 -11.00390625 18.40405273 C-11.05611328 16.83204102 -11.05611328 16.83204102 -11.109375 15.22827148 C-11.13751562 13.84938127 -11.16481549 12.47047371 -11.19140625 11.09155273 C-11.21654297 10.40125977 -11.24167969 9.7109668 -11.26757812 8.99975586 C-11.34053757 3.96555398 -11.34053757 3.96555398 -9.98583984 1.70591736 C-6.87212761 -0.33937408 -3.60483981 -0.02107597 0 0 Z \" fill=\"" + bg_color_icon + "\" transform=\"translate(22.00390625,6.595947265625)\"/>\n</svg>\n\n\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"10 0 100 95\" id=\"svg_kursor_masker_v2\"> \n<path d=\"M0 0 C0.81491913 -0.00525696 1.62983826 -0.01051392 2.4694519 -0.01593018 C5.16602689 -0.02914542 7.86201265 -0.02038684 10.55859375 -0.01025391 C12.43042108 -0.01227421 14.30224764 -0.01518528 16.17407227 -0.01895142 C20.09822072 -0.02337683 24.0221644 -0.01693673 27.94628906 -0.00292969 C32.98049722 0.01416233 38.01422559 0.0043223 43.04841614 -0.01364708 C46.91397731 -0.02447905 50.77942443 -0.02104128 54.64498901 -0.0132637 C56.50137387 -0.01126007 58.35776902 -0.01372668 60.21414185 -0.02070236 C62.80710344 -0.02830722 65.39928418 -0.01672655 67.9921875 0 C68.76215057 -0.00607269 69.53211365 -0.01214539 70.32540894 -0.0184021 C75.50634229 0.04362644 75.50634229 0.04362644 77.96931458 1.77641296 C79.34314242 3.93295785 79.42665084 5.50767635 79.5078125 8.05615234 C79.54326172 8.94882812 79.57871094 9.84150391 79.61523438 10.76123047 C79.63779297 11.69 79.66035156 12.61876953 79.68359375 13.57568359 C79.71775391 14.51605469 79.75191406 15.45642578 79.78710938 16.42529297 C79.86957593 18.74613752 79.93872778 21.06660508 79.99609375 23.38818359 C81.48109375 23.88318359 81.48109375 23.88318359 82.99609375 24.38818359 C82.99609375 32.30818359 82.99609375 40.22818359 82.99609375 48.38818359 C81.67609375 48.71818359 80.35609375 49.04818359 78.99609375 49.38818359 C79.0118042 49.97833252 79.02751465 50.56848145 79.04370117 51.17651367 C79.10607314 53.85113945 79.14509032 56.52561224 79.18359375 59.20068359 C79.20873047 60.12945312 79.23386719 61.05822266 79.25976562 62.01513672 C79.26943359 62.9078125 79.27910156 63.80048828 79.2890625 64.72021484 C79.30477295 65.54239502 79.3204834 66.3645752 79.33666992 67.21166992 C78.99609375 69.38818359 78.99609375 69.38818359 77.97505188 70.99995422 C74.88762376 73.16576983 71.62954075 72.80505496 67.9921875 72.77636719 C66.76980881 72.78425262 66.76980881 72.78425262 65.5227356 72.79229736 C62.82616061 72.80551261 60.13017485 72.79675403 57.43359375 72.78662109 C55.56176642 72.78864139 53.68993986 72.79155246 51.81811523 72.7953186 C47.89396678 72.79974402 43.9700231 72.79330391 40.04589844 72.77929688 C35.01169028 72.76220486 29.97796191 72.77204488 24.94377136 72.79001427 C21.07821019 72.80084624 17.21276307 72.79740847 13.34719849 72.78963089 C11.49081363 72.78762726 9.63441848 72.79009386 7.77804565 72.79706955 C5.18508406 72.80467441 2.59290332 72.79309374 0 72.77636719 C-0.76996307 72.78243988 -1.53992615 72.78851257 -2.33322144 72.79476929 C-7.51270607 72.7327581 -7.51270607 72.7327581 -9.98286438 70.99995422 C-11.36961046 68.81089942 -11.34617734 67.3003708 -11.296875 64.72021484 C-11.28720703 63.82753906 -11.27753906 62.93486328 -11.26757812 62.01513672 C-11.24244141 61.08636719 -11.21730469 60.15759766 -11.19140625 59.20068359 C-11.17110352 57.79012695 -11.17110352 57.79012695 -11.15039062 56.35107422 C-11.11503721 54.02953321 -11.06569299 51.70914706 -11.00390625 49.38818359 C-12.32390625 49.05818359 -13.64390625 48.72818359 -15.00390625 48.38818359 C-15.00390625 40.46818359 -15.00390625 32.54818359 -15.00390625 24.38818359 C-13.68390625 24.05818359 -12.36390625 23.72818359 -11.00390625 23.38818359 C-11.0196167 22.79803467 -11.03532715 22.20788574 -11.05151367 21.59985352 C-11.11388564 18.92522774 -11.15290282 16.25075495 -11.19140625 13.57568359 C-11.22911133 12.1825293 -11.22911133 12.1825293 -11.26757812 10.76123047 C-11.27724609 9.86855469 -11.28691406 8.97587891 -11.296875 8.05615234 C-11.31258545 7.23397217 -11.3282959 6.41179199 -11.34448242 5.56469727 C-11.00390625 3.38818359 -11.00390625 3.38818359 -9.98286438 1.77641296 C-6.89543626 -0.38940264 -3.63735325 -0.02868778 0 0 Z M-2.00390625 8.38818359 C-2.00390625 13.66818359 -2.00390625 18.94818359 -2.00390625 24.38818359 C21.75609375 24.38818359 45.51609375 24.38818359 69.99609375 24.38818359 C69.99609375 19.10818359 69.99609375 13.82818359 69.99609375 8.38818359 C46.23609375 8.38818359 22.47609375 8.38818359 -2.00390625 8.38818359 Z M-6.00390625 35.38818359 C-6.33390625 36.04818359 -6.66390625 36.70818359 -7.00390625 37.38818359 C20.05609375 37.38818359 47.11609375 37.38818359 74.99609375 37.38818359 C74.99609375 36.72818359 74.99609375 36.06818359 74.99609375 35.38818359 C48.26609375 35.38818359 21.53609375 35.38818359 -6.00390625 35.38818359 Z M-2.00390625 49.38818359 C-2.00390625 54.33818359 -2.00390625 59.28818359 -2.00390625 64.38818359 C21.75609375 64.38818359 45.51609375 64.38818359 69.99609375 64.38818359 C69.99609375 59.43818359 69.99609375 54.48818359 69.99609375 49.38818359 C46.23609375 49.38818359 22.47609375 49.38818359 -2.00390625 49.38818359 Z \" fill=\"" + bg_color_icon + "\" transform=\"translate(27.00390625,16.61181640625)\"/>\n<path d=\"M0 0 C0.81491913 -0.00525696 1.62983826 -0.01051392 2.4694519 -0.01593018 C5.16602689 -0.02914542 7.86201265 -0.02038684 10.55859375 -0.01025391 C12.43042108 -0.01227421 14.30224764 -0.01518528 16.17407227 -0.01895142 C20.09822072 -0.02337683 24.0221644 -0.01693673 27.94628906 -0.00292969 C32.98049722 0.01416233 38.01422559 0.0043223 43.04841614 -0.01364708 C46.91397731 -0.02447905 50.77942443 -0.02104128 54.64498901 -0.0132637 C56.50137387 -0.01126007 58.35776902 -0.01372668 60.21414185 -0.02070236 C62.80710344 -0.02830722 65.39928418 -0.01672655 67.9921875 0 C68.76215057 -0.00607269 69.53211365 -0.01214539 70.32540894 -0.0184021 C75.50634229 0.04362644 75.50634229 0.04362644 77.96931458 1.77641296 C79.34314242 3.93295785 79.42665084 5.50767635 79.5078125 8.05615234 C79.54326172 8.94882812 79.57871094 9.84150391 79.61523438 10.76123047 C79.63779297 11.69 79.66035156 12.61876953 79.68359375 13.57568359 C79.71775391 14.51605469 79.75191406 15.45642578 79.78710938 16.42529297 C79.86957593 18.74613752 79.93872778 21.06660508 79.99609375 23.38818359 C81.48109375 23.88318359 81.48109375 23.88318359 82.99609375 24.38818359 C82.99609375 32.30818359 82.99609375 40.22818359 82.99609375 48.38818359 C81.67609375 48.71818359 80.35609375 49.04818359 78.99609375 49.38818359 C79.0118042 49.97833252 79.02751465 50.56848145 79.04370117 51.17651367 C79.10607314 53.85113945 79.14509032 56.52561224 79.18359375 59.20068359 C79.20873047 60.12945312 79.23386719 61.05822266 79.25976562 62.01513672 C79.26943359 62.9078125 79.27910156 63.80048828 79.2890625 64.72021484 C79.30477295 65.54239502 79.3204834 66.3645752 79.33666992 67.21166992 C78.99609375 69.38818359 78.99609375 69.38818359 77.97505188 70.99995422 C74.88762376 73.16576983 71.62954075 72.80505496 67.9921875 72.77636719 C66.76980881 72.78425262 66.76980881 72.78425262 65.5227356 72.79229736 C62.82616061 72.80551261 60.13017485 72.79675403 57.43359375 72.78662109 C55.56176642 72.78864139 53.68993986 72.79155246 51.81811523 72.7953186 C47.89396678 72.79974402 43.9700231 72.79330391 40.04589844 72.77929688 C35.01169028 72.76220486 29.97796191 72.77204488 24.94377136 72.79001427 C21.07821019 72.80084624 17.21276307 72.79740847 13.34719849 72.78963089 C11.49081363 72.78762726 9.63441848 72.79009386 7.77804565 72.79706955 C5.18508406 72.80467441 2.59290332 72.79309374 0 72.77636719 C-0.76996307 72.78243988 -1.53992615 72.78851257 -2.33322144 72.79476929 C-7.51270607 72.7327581 -7.51270607 72.7327581 -9.98286438 70.99995422 C-11.36961046 68.81089942 -11.34617734 67.3003708 -11.296875 64.72021484 C-11.28720703 63.82753906 -11.27753906 62.93486328 -11.26757812 62.01513672 C-11.24244141 61.08636719 -11.21730469 60.15759766 -11.19140625 59.20068359 C-11.17110352 57.79012695 -11.17110352 57.79012695 -11.15039062 56.35107422 C-11.11503721 54.02953321 -11.06569299 51.70914706 -11.00390625 49.38818359 C-12.32390625 49.05818359 -13.64390625 48.72818359 -15.00390625 48.38818359 C-15.00390625 40.46818359 -15.00390625 32.54818359 -15.00390625 24.38818359 C-13.68390625 24.05818359 -12.36390625 23.72818359 -11.00390625 23.38818359 C-11.0196167 22.79803467 -11.03532715 22.20788574 -11.05151367 21.59985352 C-11.11388564 18.92522774 -11.15290282 16.25075495 -11.19140625 13.57568359 C-11.22911133 12.1825293 -11.22911133 12.1825293 -11.26757812 10.76123047 C-11.27724609 9.86855469 -11.28691406 8.97587891 -11.296875 8.05615234 C-11.31258545 7.23397217 -11.3282959 6.41179199 -11.34448242 5.56469727 C-11.00390625 3.38818359 -11.00390625 3.38818359 -9.98286438 1.77641296 C-6.89543626 -0.38940264 -3.63735325 -0.02868778 0 0 Z M-7.95991516 2.76493835 C-9.44105525 5.06788292 -9.34407382 6.77185398 -9.296875 9.49365234 C-9.28720703 10.4765625 -9.27753906 11.45947266 -9.26757812 12.47216797 C-9.22987305 14.0084082 -9.22987305 14.0084082 -9.19140625 15.57568359 C-9.17787109 16.61144531 -9.16433594 17.64720703 -9.15039062 18.71435547 C-9.11502014 21.27282058 -9.06566169 23.83024139 -9.00390625 26.38818359 C-10.65390625 26.38818359 -12.30390625 26.38818359 -14.00390625 26.38818359 C-14.00390625 32.98818359 -14.00390625 39.58818359 -14.00390625 46.38818359 C-12.35390625 46.71818359 -10.70390625 47.04818359 -9.00390625 47.38818359 C-9.0196167 48.00862549 -9.03532715 48.62906738 -9.05151367 49.26831055 C-9.11386839 52.07900887 -9.15289773 54.88956171 -9.19140625 57.70068359 C-9.21654297 58.67714844 -9.24167969 59.65361328 -9.26757812 60.65966797 C-9.27724609 61.59746094 -9.28691406 62.53525391 -9.296875 63.50146484 C-9.31258545 64.36553955 -9.3282959 65.22961426 -9.34448242 66.11987305 C-9.16357526 68.38429044 -9.16357526 68.38429044 -7.95991516 70.00569153 C-4.97043749 72.11863137 -1.89609672 71.80562073 1.6328125 71.77636719 C2.40871735 71.78162415 3.18462219 71.7868811 3.98403931 71.79229736 C6.55076177 71.80550944 9.11686489 71.79675526 11.68359375 71.78662109 C13.46574015 71.78864149 15.24788574 71.79155264 17.0300293 71.7953186 C20.7658678 71.79974358 24.50149118 71.79330535 28.23730469 71.77929688 C33.02938459 71.76220483 37.82096045 71.77204509 42.61302185 71.79001427 C46.29329231 71.80084744 49.973443 71.79740792 53.65371704 71.78963089 C55.42078714 71.78762759 57.18786807 71.79009271 58.95492554 71.79706955 C61.42336899 71.80467645 63.8909927 71.79309112 66.359375 71.77636719 C67.09193512 71.78243988 67.82449524 71.78851257 68.57925415 71.79476929 C71.51919 71.75781055 73.50921681 71.73230447 75.95210266 70.00569153 C77.40157015 67.75995859 77.33740547 66.16032836 77.2890625 63.50146484 C77.27939453 62.56367187 77.26972656 61.62587891 77.25976562 60.65966797 C77.23462891 59.68320313 77.20949219 58.70673828 77.18359375 57.70068359 C77.17005859 56.71261719 77.15652344 55.72455078 77.14257812 54.70654297 C77.10721578 52.26654129 77.05786408 49.82763641 76.99609375 47.38818359 C78.64609375 47.05818359 80.29609375 46.72818359 81.99609375 46.38818359 C81.99609375 39.78818359 81.99609375 33.18818359 81.99609375 26.38818359 C80.34609375 26.38818359 78.69609375 26.38818359 76.99609375 26.38818359 C77.0118042 25.73744873 77.02751465 25.08671387 77.04370117 24.41625977 C77.10604024 21.46948935 77.14508059 18.52285762 77.18359375 15.57568359 C77.20873047 14.55152344 77.23386719 13.52736328 77.25976562 12.47216797 C77.26943359 11.48925781 77.27910156 10.50634766 77.2890625 9.49365234 C77.30477295 8.58768311 77.3204834 7.68171387 77.33666992 6.74829102 C77.16513213 4.4040785 77.16513213 4.4040785 75.95210266 2.76493835 C72.96115168 0.65973015 69.88585727 0.97076657 66.359375 1 C65.58347015 0.99474304 64.80756531 0.98948608 64.00814819 0.98406982 C61.44142573 0.97085775 58.87532261 0.97961193 56.30859375 0.98974609 C54.52644735 0.9877257 52.74430176 0.98481455 50.9621582 0.98104858 C47.2263197 0.9766236 43.49069632 0.98306183 39.75488281 0.99707031 C34.96280291 1.01416236 30.17122705 1.0043221 25.37916565 0.98635292 C21.69889519 0.97551975 18.0187445 0.97895926 14.33847046 0.9867363 C12.57140036 0.9887396 10.80431943 0.98627447 9.03726196 0.97929764 C6.56881851 0.97169074 4.1011948 0.98327607 1.6328125 1 C0.90025238 0.99392731 0.16769226 0.98785461 -0.58706665 0.9815979 C-3.52336227 1.01851088 -5.51696705 1.04544699 -7.95991516 2.76493835 Z \" fill=\"" + bg_color_icon + "\" transform=\"translate(27.00390625,16.61181640625)\"/>\n<path d=\"M0 0 C25.08 0 50.16 0 76 0 C76 6.6 76 13.2 76 20 C50.92 20 25.84 20 0 20 C0 13.4 0 6.8 0 0 Z M2 2 C2 7.28 2 12.56 2 18 C25.76 18 49.52 18 74 18 C74 12.72 74 7.44 74 2 C50.24 2 26.48 2 2 2 Z \" fill=\"#E1EEFB\" transform=\"translate(23,23)\"/>\n<path d=\"M0 0 C25.08 0 50.16 0 76 0 C76 6.27 76 12.54 76 19 C50.92 19 25.84 19 0 19 C0 12.73 0 6.46 0 0 Z M2 2 C2 6.95 2 11.9 2 17 C25.76 17 49.52 17 74 17 C74 12.05 74 7.1 74 2 C50.24 2 26.48 2 2 2 Z \" fill=\"#FFFFFF\" transform=\"translate(23,64)\"/>\n<path d=\"M0 0 C28.38 0 56.76 0 86 0 C86 1.65 86 3.3 86 5 C57.62 5 29.24 5 0 5 C0 3.35 0 1.7 0 0 Z M3 1 C2.67 1.66 2.34 2.32 2 3 C29.06 3 56.12 3 84 3 C84 2.34 84 1.68 84 1 C57.27 1 30.54 1 3 1 Z \" fill=\"#E8F2FC\" transform=\"translate(18,51)\"/>\n<path d=\"M0 0 C0.81462708 -0.0049649 1.62925415 -0.00992981 2.46856689 -0.01504517 C5.17583039 -0.02970515 7.88303529 -0.03647521 10.59033203 -0.04199219 C12.46501671 -0.04774058 14.33970136 -0.05349835 16.21438599 -0.05926514 C20.15041377 -0.06978612 24.08642106 -0.07562156 28.02246094 -0.07910156 C33.07237281 -0.08458795 38.12201526 -0.10861441 43.17184258 -0.13707352 C47.04595741 -0.15567405 50.92000703 -0.16090412 54.79416275 -0.16243744 C56.65614418 -0.16547047 58.5181243 -0.17352076 60.3800621 -0.18662262 C62.98275129 -0.20362901 65.5847782 -0.20181626 68.1875 -0.1953125 C68.96060516 -0.20452728 69.73371033 -0.21374207 70.53024292 -0.22323608 C75.73367244 -0.1823904 75.73367244 -0.1823904 78.198349 1.54737854 C79.56867849 3.70524809 79.65372068 5.28122395 79.73486328 7.82910156 C79.7703125 8.72177734 79.80576172 9.61445313 79.84228516 10.53417969 C79.86484375 11.46294922 79.88740234 12.39171875 79.91064453 13.34863281 C79.94480469 14.28900391 79.97896484 15.229375 80.01416016 16.19824219 C80.09662671 18.51908674 80.16577856 20.83955429 80.22314453 23.16113281 C81.70814453 23.65613281 81.70814453 23.65613281 83.22314453 24.16113281 C82.72814453 25.64613281 82.72814453 25.64613281 82.22314453 27.16113281 C80.57314453 26.83113281 78.92314453 26.50113281 77.22314453 26.16113281 C77.19341553 25.17717529 77.19341553 25.17717529 77.16308594 24.17333984 C77.06801946 21.21052212 76.95826701 18.24842749 76.84814453 15.28613281 C76.81720703 14.25359375 76.78626953 13.22105469 76.75439453 12.15722656 C76.71572266 11.17109375 76.67705078 10.18496094 76.63720703 9.16894531 C76.60578613 8.25773926 76.57436523 7.3465332 76.54199219 6.40771484 C76.42431942 3.96182095 76.42431942 3.96182095 74.22314453 2.16113281 C71.67947854 1.96281459 69.24469695 1.88834901 66.69995117 1.90234375 C65.53631294 1.89708679 65.53631294 1.89708679 64.34916687 1.89172363 C61.77712127 1.88289971 59.20534933 1.88875829 56.63330078 1.89550781 C54.84972582 1.89416121 53.06615122 1.89222072 51.28257751 1.88970947 C47.54080721 1.8867572 43.79913228 1.89105863 40.05737305 1.90039062 C35.2575142 1.91177698 30.4578792 1.90523154 25.6580286 1.8932457 C21.97348846 1.88602282 18.28900149 1.88831714 14.60445976 1.89350128 C12.83459891 1.89483702 11.06473325 1.8931927 9.29487801 1.88854218 C6.82169924 1.88347084 4.34888407 1.891196 1.87573242 1.90234375 C0.77453568 1.89627106 0.77453568 1.89627106 -0.34890747 1.89007568 C-4.04694363 1.92100195 -5.61438779 2.05282102 -8.77685547 4.16113281 C-8.77685547 -1.61620755 -4.6512735 0.0066904 0 0 Z \" fill=\"#F9FBFE\" transform=\"translate(26.77685546875,16.8388671875)\"/>\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C1 7.59 1 15.18 1 23 C-0.65 23 -2.3 23 -4 23 C-3.67 29.93 -3.34 36.86 -3 44 C-3.66 44 -4.32 44 -5 44 C-5 36.41 -5 28.82 -5 21 C-3.68 20.67 -2.36 20.34 -1 20 C-1.00523682 19.42967041 -1.01047363 18.85934082 -1.01586914 18.27172852 C-1.03658221 15.70199677 -1.0496419 13.13228253 -1.0625 10.5625 C-1.07087891 9.66466797 -1.07925781 8.76683594 -1.08789062 7.84179688 C-1.09111328 6.98779297 -1.09433594 6.13378906 -1.09765625 5.25390625 C-1.10289307 4.46314697 -1.10812988 3.6723877 -1.11352539 2.85766602 C-1 1 -1 1 0 0 Z \" fill=\"#E3EEFB\" transform=\"translate(17,20)\"/>\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C1 6.93 1 13.86 1 21 C-0.65 21.33 -2.3 21.66 -4 22 C-4 27.61 -4 33.22 -4 39 C-4.33 39 -4.66 39 -5 39 C-5 32.73 -5 26.46 -5 20 C-3.68 19.67 -2.36 19.34 -1 19 C-0.67 12.73 -0.34 6.46 0 0 Z \" fill=\"#E6F2FC\" transform=\"translate(109,44)\"/>\n</svg>\n\n\n\n\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_id_kursor\">\n                                Kursor\n                            </div>\n                            <div class=\"box_column_action_strip\">\n    <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_kursor\">\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_3\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"box_group_disabilitas\" id=\"action_space_text\">\n                            <div class=\"box_icon_disabilitas\">\n                                <svg version=\"1.0\" width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" width=\"208.000000pt\" height=\"207.000000pt\" viewBox=\"0 0 208.000000 207.000000\" preserveAspectRatio=\"xMidYMid meet\">\n                                    <g transform=\"translate(0.000000,207.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\">\n                                        <path class=\"icon_svg_color\" d=\"M270 1825 l0 -105 320 0 320 0 0 -480 0 -480 110 0 110 0 0 480 0\n480 320 0 320 0 0 105 0 105 -750 0 -750 0 0 -105z\" />\n                                        <path class=\"icon_svg_color\" d=\"M300 625 l-185 -185 188 -188 187 -187 0 133 0 132 530 0 530 0 0\n-132 0 -133 187 188 188 187 -188 187 -187 188 0 -133 0 -132 -530 0 -529 0\n-3 130 -3 130 -185 -185z\" />\n                                    </g>\n                                </svg>\n\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"id_space_text\">\n                                Spasi Teks\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_space_text\">\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_2\"></div>\n                                    <div class=\"strip_loading_unprocess_v3\" id=\"strip_loading_3\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n\n\n                        <div class=\"box_group_disabilitas\" id=\"action_garis_bawahi_tautan\">\n                            <div class=\"box_icon_disabilitas\">\n\n                                <svg fill=\"#000000\" id=\"svg_decoration_link\" width=\"50px\" height=\"50px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <rect class=\"icon_fill_svg_color_black\" x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\"></rect>\n                                    <path class=\"icon_fill_svg_color_white\" d=\"M7,6A1,1,0,0,1,8,5h2a1,1,0,0,1,0,2v4a2,2,0,0,0,4,0V7a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2v4a4,4,0,0,1-8,0V7A1,1,0,0,1,7,6Zm9,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z\"></path>\n                                </svg>\n\n\n                                <svg version=\"1.0\" id=\"svg_block_decoration_link\" xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 231.000000 129.000000\" preserveAspectRatio=\"xMidYMid meet\">\n                                    <g class='active_icon_svg_color' transform=\"translate(0.000000,129.000000) scale(0.100000,-0.100000)\" stroke=\"none\">\n                                        <path class='active_icon_svg_color' d=\"M435 1136 c-495 -161 -489 -863 9 -1015 61 -19 93 -21 293 -21 l225\n0 29 29 c31 32 38 79 18 124 -22 48 -40 52 -274 57 -216 5 -221 6 -277 33 -62\n30 -115 83 -150 149 -19 36 -23 58 -23 138 0 80 4 102 23 138 35 66 88 119\n150 149 56 27 61 28 277 33 234 5 252 9 274 57 20 45 13 92 -18 124 l-29 29\n-229 0 c-209 -1 -234 -3 -298 -24z\" />\n                                        <path class='active_icon_svg_color' d=\"M1269 1131 c-31 -32 -38 -79 -18 -124 22 -48 40 -52 274 -57 216 -5\n221 -6 277 -33 62 -30 115 -83 150 -149 19 -36 23 -58 23 -138 0 -80 -4 -102\n-23 -138 -35 -66 -88 -119 -150 -149 -56 -27 -61 -28 -277 -33 -234 -5 -252\n-9 -274 -57 -20 -45 -13 -92 18 -124 l29 -29 225 0 c253 0 310 10 417 75 338\n205 338 705 0 910 -107 65 -164 75 -417 75 l-225 0 -29 -29z\" />\n                                        <path class='active_icon_svg_color' d=\"M763 724 c-29 -15 -63 -65 -63 -94 0 -30 34 -80 65 -94 49 -24 681\n-24 730 0 31 14 65 64 65 94 0 30 -34 80 -65 94 -49 24 -684 23 -732 0z\" />\n                                    </g>\n                                </svg>\n\n\n\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\" id=\"text_garis_bawahi_tautan\">\n                                Garis Bawahi Tautan\n                            </div>\n                            <div class=\"box_column_action_strip\">\n                                <div class=\"box_row_action_strip\" id=\"list_strip_loading_action_garis_bawahi_tautan\">\n                                    <div class=\"strip_loading_unprocess_v2\" id=\"strip_loading_1\"></div>\n                                    <div class=\"strip_loading_unprocess_v2\" id=\"strip_loading_2\"></div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n     <div class=\"box_group_disabilitas display_none_mobile\" id=\"action_tooltip\">\n                            <div class=\"box_icon_disabilitas\">\n                        \n     <svg fill=\"none\"  width=\"50px\" height=\"50px\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n<path  class=\"icon_svg_color\" clip-rule=\"evenodd\" d=\"M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 7C10.8284 7 11.5 6.32843 11.5 5.5C11.5 4.67157 10.8284 4 10 4C9.17157 4 8.5 4.67157 8.5 5.5C8.5 6.32843 9.17157 7 10 7ZM11 15V9H9V15H11Z\" fill=\"black\" fill-rule=\"evenodd\"/>\n</svg>\n                            </div>\n                            <div class=\"box_text_bottom_disabilitas\">\n                              Keterangan Alat\n                            </div>\n                            <div class=\"box_column_action_strip\">\n\n                            </div>\n                        </div>\n                    </div>\n\n\n\n\n                    <div class=\"column_reset_disabilitas_menu\">\n                        <div class=\"row_persegi_reset\" id=\"reset_pengaturan_all_dsb\">\n                            <div class=\"icon_persegi_riset\">\n                                <svg height=\"20px\" width=\"20px\" id=\"Layer_1\" style=\"enable-background:new 0 0 32 32;\" version=\"1.1\" viewBox=\"0 0 32 32\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                                    <path class=\"icon_x_svg_color\" d=\"M29,2c-0.452,0-0.952,0.144-1.415,0.582l-1.941,1.941C22.981,2.273,19.593,1,16,1C9.473,1,3.738,5.173,1.73,11.385  c-0.34,1.051,0.237,2.179,1.288,2.518C3.224,13.969,3.431,14,3.634,14c0.845,0,1.63-0.539,1.903-1.385C7.009,8.06,11.214,5,16,5  c2.513,0,4.88,0.864,6.791,2.377l-3.209,3.209C19.144,11.048,19,11.548,19,12c0,1.021,0.809,2,2,2h8c1.024,0,2-0.812,2-2V4  C31,2.809,30.021,2,29,2z M28.981,18.097C28.776,18.031,28.569,18,28.366,18c-0.845,0-1.63,0.539-1.903,1.385  C24.991,23.94,20.786,27,16,27c-2.513,0-4.88-0.864-6.791-2.377l3.209-3.209C12.856,20.952,13,20.452,13,20c0-1.021-0.809-2-2-2H3  c-1.024,0-2,0.812-2,2v8c0,1.191,0.979,2,2,2c0.452,0,0.952-0.144,1.415-0.582l1.941-1.941C9.019,29.727,12.407,31,16,31  c6.527,0,12.262-4.173,14.27-10.385C30.609,19.564,30.032,18.437,28.981,18.097z\" />\n                                </svg>\n                            </div>\n                            <div class=\"column_text_persegi_riset\">\n                                Atur Ulang Semua Pengaturan Aksesibilitas\n                            </div>\n                        </div>\n                    </div>\n\n\n\n\n                    <!--div class=\"row_column_creator\">\n                    <div class=\"creator_widget\">\n                   Di Buat Oleh : \n                </div>\n              \n                    <a href=\"https://fathulhudoyo.info\" class=\"column_cek_creator\" target=\"_blank\">\n                    Fathul Hudoyo\n                </a>\n                </div-->\n                </div>\n            </div>\n\n              \n\n            <div class=\"row_data_setting_layout \">        \n<div class=\"group_action_setting_layout " + name_class_widget8 + "\" id=\"dropdown_setting_widget\" aria-expanded=\"false\">\n\n\n    <div class=\"box_content_settings\">\n        <span class=\"svg_icon_layout_dsb\">\n        <div class=\"box_content_disabilitas\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" width=\"15px\" height=\"15px\"><path fill=\"#FFFFFF\" fill-rule=\"evenodd\" d=\"M3.81818182 6c0-1.2049091.97690908-2.18181818 2.18181818-2.18181818S8.1818182 4.7950909 8.1818182 6 7.2049091 8.1818182 6 8.1818182 3.81818182 7.2049091 3.81818182 6ZM12 7.0909091V4.9090909l-1.5763636-.2956364c-.0823637-.264-.1903637-.5170909-.3169091-.75872723l.9070909-1.326L9.4712727.98618182l-1.326.90709091c-.2416363-.12654546-.4947272-.23454546-.7587272-.31690909L7.0909091 0H4.9090909l-.2956364 1.57636364c-.264.08236363-.5170909.19036363-.75872723.31690909l-1.326-.90709091L.98618182 2.52872727l.90709091 1.326c-.12654546.24163633-.23454546.49472723-.31690909.75872723L0 4.9090909v2.1818182l1.57636364.2956364c.08236363.264.19036363.5170909.31690909.7587272l-.90709091 1.326 1.54254545 1.5425455 1.326-.9070909c.24163633.1265454.49472723.2345454.75872723.3169091L4.9090909 12h2.1818182l.2956364-1.5763636c.264-.0823637.5170909-.1903637.7587272-.3169091l1.326.9070909 1.5425455-1.5425455-.9070909-1.326c.1265454-.2416363.2345454-.4947272.3169091-.7587272L12 7.0909091Z\"></path></svg>\n</div>       \n</span>\n\n    </div>\n    <div class=\"row_data_widget\">\n        <div class=\"text_column_layaout_disabilitas\">\n        Pindahkan Widget\n        </div>\n        <div class=\"icon_column_layaout_disabilitas\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10px\" height=\"10px\" viewBox=\"0 0 6 11\" aria-hidden=\"true\"\n                focusable=\"false\">\n                <path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m.5 10.5 5-5-5-5\"></path>\n            </svg>\n        </div>\n    </div>\n        </div>\n\n\n\n        <div class=\"layout_settings_widget\" id=\"show_setting_widget\">\n\n\n\n        <div class=\"group_move_widget " + name_class_widget7 + "\">\n\n\n\t\t<div class=\"radio_row_widget\" id=\"action_radio_button\">\n\n\t\t\t<div class=\"jarak_radio\" data-move-wg=\"left_top\">\n\t\t\t\tKe Posisi Atas dan Kiri\n\t\t\t</div>\n\n\t\t\t<div class=\"jarak_kanan_radio\">\n\t\t\t\t<input type=\"radio\" name=\"group\" id=\"enable_radion_1\"  class=\"radio_widget_dsb\" />\n\t\t\t</div>\n\n\n\t\t</div>\n\n\n\n\t\t<div class=\"radio_row_widget\" id=\"action_radio_button\">\n\n\t\t\t<div class=\"jarak_radio\" data-move-wg=\"right_top\">\n\t\t\t\t\tKe Posisi Atas dan Kanan\n\t\t\t</div>\n\n\t\t\t\t<div class=\"jarak_kanan_radio\">\n\t\t\t\t<input type=\"radio\" name=\"group\" id=\"enable_radion_2\" class=\"radio_widget_dsb\" />\n\t\t\t</div>\n\n\n\t\t</div>\n\n\n\t\t<div class=\"radio_row_widget\" id=\"action_radio_button\">\n\n\t\t\t<div class=\"jarak_radio\" data-move-wg=\"left_bottom\">\n\t\t\tKe Posisi Bawah dan Kiri\n\t\t\t</div>\n\n\t\t\t<div class=\"jarak_kanan_radio\">\n\t\t\t\t<input type=\"radio\" name=\"group\" id=\"enable_radion_3\"   class=\"radio_widget_dsb\" />\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<div class=\"radio_row_widget\" id=\"action_radio_button\">\n\n\t\t\t<div class=\"jarak_radio\" data-move-wg=\"right_bottom\">\n\t\t\t\tKe Posisi Bawah dan Kanan\n\t\t\t</div>\n\t\t\t<div class=\"jarak_kanan_radio\">\n\t\t\t\t<input type=\"radio\" name=\"group\" id=\"enable_radion_4\"  class=\"radio_widget_dsb\" />\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n\n         </div> \n</div>\n         \n\n     <div class=\"column_cek_version_dsb\">\n                    <div class=\"column_text_cek_version_dsb\">\n                    -  Widget Aksesibilitas Version 2.1.2  -\n                </div>\n            \n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>";
    _0x2e314e("#slider_dsb_element").html(_0x567ba2);
    document.querySelectorAll("#action_radio_button").forEach(_0x317d68 => {
      _0x317d68.addEventListener("click", _0x28e907 => {
        _0x28e907.preventDefault();
        var _0x2d49fb = _0x2e314e(_0x28e907.target).attr("data-move-wg");
        var _0x491fc3 = _0x2e314e(_0x28e907.target).attr('id');
        if (_0x2d49fb == "left_top" || _0x491fc3 == "enable_radion_1") {
          _0x5b0e0b("left_top", "click");
          localStorage.setItem("position_widget", "left_top");
        } else {
          if (_0x2d49fb == "right_top" || _0x491fc3 == "enable_radion_2") {
            _0x5b0e0b("right_top", "click");
            localStorage.setItem("position_widget", "right_top");
          } else {
            if (_0x2d49fb == "left_bottom" || _0x491fc3 == "enable_radion_3") {
              _0x5b0e0b("left_bottom", "click");
              localStorage.setItem("position_widget", "left_bottom");
            } else if (_0x2d49fb == "right_bottom" || _0x491fc3 == "enable_radion_4") {
              _0x5b0e0b("right_bottom", "click");
              localStorage.setItem("position_widget", "right_bottom");
            }
          }
        }
      });
    });
    _0x2e314e("#slider_mouse_over").html("<div class=\"tooltip_data_move_mouse_new\" id=\"move_tooltip_data\"></div>");
    _0x2e314e("#dropdown_setting_widget").attr("aria-expanded", "true");
    _0x2e314e("#show_setting_widget").css("display", "flex");
    var _0x46818b = localStorage.getItem("position_widget");
    if (_0x46818b != null) {}
    if (position_daftar_web == "left_top") {
      _0x2e314e("#enable_radion_4").removeAttr("checked");
      _0x2e314e("#enable_radion_3").removeAttr("checked");
      _0x2e314e("#enable_radion_2").removeAttr("checked");
      _0x2e314e("#enable_radion_1").attr("checked", "checked");
    } else {
      if (position_daftar_web == "right_top") {
        _0x2e314e("#enable_radion_4").removeAttr("checked");
        _0x2e314e("#enable_radion_3").removeAttr("checked");
        _0x2e314e("#enable_radion_2").attr("checked", "checked");
        _0x2e314e("#enable_radion_1").removeAttr("checked");
      } else {
        if (position_daftar_web == "left_bottom") {
          _0x2e314e("#enable_radion_4").removeAttr("checked");
          _0x2e314e("#enable_radion_3").attr("checked", "checked");
          _0x2e314e("#enable_radion_2").removeAttr("checked");
          _0x2e314e("#enable_radion_1").removeAttr("checked");
        } else if (position_daftar_web == "right_bottom") {
          _0x2e314e("#enable_radion_4").attr("checked", "checked");
          _0x2e314e("#enable_radion_3").removeAttr("checked");
          _0x2e314e("#enable_radion_2").removeAttr("checked");
          _0x2e314e("#enable_radion_1").removeAttr("checked");
        }
      }
    }
    function _0x5b0e0b(_0x3bd743, _0x1e9d8c) {
      _0x4d67d7();
      if (_0x3bd743 == "left_top" || _0x3bd743 == "left_bottom") {
        if (_0x3bd743 == "left_top") {
          _0x2e314e("#enable_radion_4").removeAttr("checked");
          _0x2e314e("#enable_radion_3").removeAttr("checked");
          _0x2e314e("#enable_radion_2").removeAttr("checked");
          _0x2e314e("#enable_radion_1").attr("checked", "checked");
          if (_0x1e9d8c == "click") {
            if (!_0x2e314e("#show_menu_dsb_web").hasClass("circle_left_top_sidebar")) {
              _0x2e314e("#show_menu_dsb_web").addClass("circle_left_top_sidebar");
            }
          }
        }
        if (_0x3bd743 == "left_bottom") {
          _0x2e314e("#enable_radion_4").removeAttr("checked");
          _0x2e314e("#enable_radion_3").attr("checked", "checked");
          _0x2e314e("#enable_radion_2").removeAttr("checked");
          _0x2e314e("#enable_radion_1").removeAttr("checked");
        }
      } else {
        if (_0x3bd743 == "right_top" || _0x3bd743 == "right_bottom") {
          if (_0x3bd743 == "right_top") {
            _0x2e314e("#enable_radion_4").removeAttr("checked");
            _0x2e314e("#enable_radion_3").removeAttr("checked");
            _0x2e314e("#enable_radion_2").attr("checked", "checked");
            _0x2e314e("#enable_radion_1").removeAttr("checked");
            if (_0x1e9d8c == "click") {
              if (!_0x2e314e("#show_menu_dsb_web").hasClass("circle_right_top_sidebar")) {
                _0x2e314e("#show_menu_dsb_web").addClass("circle_right_top_sidebar");
                _0x3ae39c();
              }
            } else {
              _0x3ae39c();
            }
          }
          if (_0x3bd743 == "right_bottom") {
            _0x2e314e("#enable_radion_4").attr("checked", "checked");
            _0x2e314e("#enable_radion_3").removeAttr("checked");
            _0x2e314e("#enable_radion_2").removeAttr("checked");
            _0x2e314e("#enable_radion_1").removeAttr("checked");
            if (_0x1e9d8c == "click") {
              if (!_0x2e314e("#show_menu_dsb_web").hasClass("circle_right_sidebar")) {
                _0x2e314e("#show_menu_dsb_web").addClass("circle_right_sidebar");
                _0x3ae39c();
              }
            } else {
              _0x3ae39c();
            }
          }
        }
      }
    }
    function _0x3ae39c() {
      _0x2e314e("#widget_menu_disabilitas").addClass("except_position_swipe");
      _0x2e314e(".content_aksesbilitas_utama").addClass("except_content_aksesbilitas_utama");
      _0x2e314e("#checklangmenu").addClass("except_groupcontenttoolbar");
      _0x2e314e(".group_scroll_content").addClass("except_group_scroll_content");
      _0x2e314e(".content_daftar_action_disabilitas").addClass("except_content_daftar_action_disabilitas");
      _0x2e314e("#show_profile_widget_dsb").addClass("except_layout_profile_widget");
    }
    function _0x4d67d7() {
      _0x2e314e("#show_menu_dsb_web").removeClass("circle_left_top_sidebar");
      _0x2e314e("#show_menu_dsb_web").removeClass("circle_right_sidebar");
      _0x2e314e("#show_menu_dsb_web").removeClass("circle_right_top_sidebar");
      _0x2e314e("#widget_menu_disabilitas").removeClass("except_position_swipe");
      _0x2e314e(".content_aksesbilitas_utama").removeClass("except_content_aksesbilitas_utama");
      _0x2e314e("#checklangmenu").removeClass("except_groupcontenttoolbar");
      _0x2e314e(".group_scroll_content").removeClass("except_group_scroll_content");
      _0x2e314e(".content_daftar_action_disabilitas").removeClass("except_content_daftar_action_disabilitas");
      _0x2e314e("#show_profile_widget_dsb").removeClass("except_layout_profile_widget");
    }
    _0x2e314e("#dropdown_setting_widget").click(function (_0x3d598e) {
      _0x3d598e.preventDefault();
      var _0x3dea2b = _0x2e314e("#dropdown_setting_widget").attr("aria-expanded");
      if (_0x3dea2b == "true") {
        _0x2e314e("#dropdown_setting_widget").attr("aria-expanded", "false");
        _0x2e314e("#show_setting_widget").hide();
      } else {
        _0x2e314e("#dropdown_setting_widget").attr("aria-expanded", "true");
        _0x2e314e("#show_setting_widget").show();
      }
    });
    _0x2e314e("#list_strip_loading_perbesar_text").hide();
    _0x2e314e("#list_strip_loading_perkecil_text").hide();
    _0x2e314e("#list_strip_loading_action_kontras").hide();
    _0x2e314e("#list_strip_loading_action_grey_scale").hide();
    _0x2e314e("#svg_kontras_warna,#svg_kontras_klise,#svg_kontras_light,#svg_balikan_warna").hide();
    _0x2e314e("#list_strip_loading_perataan_text").hide();
    _0x2e314e("#list_strip_loading_action_tulisan_line_height").hide();
    _0x2e314e("#svg_kursor_masker_v2,#svg_kursor_masker,#list_strip_loading_action_kursor").hide();
    _0x2e314e("#list_strip_loading_action_space_text").hide();
    _0x2e314e("#svg_block_decoration_link,#list_strip_loading_action_garis_bawahi_tautan").hide();
    _0x2e314e("#svg_font_di_perbesar,#list_strip_loading_action_tulisan_dapat_dibaca").hide();
    _0x2e314e("#widget_menu_disabilitas .box_group_disabilitas").each(function (_0x35b320, _0x468180) {
      _0x2e314e(_0x468180).cssImportant("line-height", "20px");
    });
    _0x2e314e("#action_moda_suara").click(function (_0x24cfc1) {
      _0x24cfc1.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "moda-suara");
      if (_0x2e314e("#action_moda_suara").hasClass("active_box_menu_disabilitas")) {
        _0x2e314e("#action_moda_suara").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_moda_suara .box_icon_disabilitas .active_icon_svg_sroke_color").each(function (_0x2a29b6, _0x81e62) {
          var _0x445840 = _0x81e62.classList.value;
          if (_0x445840.includes("active_icon_svg_sroke_color")) {
            _0x81e62.classList = "icon_svg_sroke_color";
          }
        });
        _0x2e314e("#action_moda_suara").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        localStorage.setItem("permismobile", "off");
        localStorage.setItem("permisvoice", "off");
      } else {
        _0x1750c5();
      }
    });
    function _0x1750c5() {
      if (getOS() == "iOS" || getOS() == "Android") {
        localStorage.setItem("permismobile", 'on');
        speachmobile("Selamat Datang Di Website " + base_url_website);
      } else {
        localStorage.setItem("permisvoice", 'on');
        speach("Selamat Datang Di Website " + base_url_website);
      }
      _0x2e314e("#action_moda_suara").addClass("active_box_menu_disabilitas");
      _0x2e314e("#action_moda_suara .box_icon_disabilitas .icon_svg_sroke_color").each(function (_0x309833, _0x462959) {
        var _0x4f5eff = _0x462959.classList.value;
        if (_0x4f5eff.includes("icon_svg_sroke_color")) {
          _0x462959.classList = "icon_svg_sroke_color active_icon_svg_sroke_color";
        }
      });
      _0x2e314e("#action_moda_suara").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
    }
    _0x2e314e("#action_perbesar_text").click(function (_0x1b0ece) {
      _0x1b0ece.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "perbesar-teks");
      if (_0x2e314e("#action_perbesar_text").hasClass("active_box_menu_disabilitas") && action_text_besar.length == 4) {
        clear_set_text_besar();
      } else {
        clear_set_text_kecil();
        load_active_text_besar();
        if (action_text_besar.length == 0) {
          localStorage.setItem("text_besar", '1');
          text_besar_1();
        } else {
          if (action_text_besar.length == 1) {
            localStorage.setItem("text_besar", '2');
            text_besar_2();
          } else {
            if (action_text_besar.length == 2) {
              localStorage.setItem("text_besar", '3');
              text_besar_3();
            } else if (action_text_besar.length == 3) {
              localStorage.setItem("text_besar", '4');
              text_besar_4();
            }
          }
        }
        action_text_besar.push(1);
        _0x2e314e("#action_perbesar_text").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
      }
    });
    _0x2e314e("#action_grey_scale").click(function (_0x2b4263) {
      _0x2b4263.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "skala-abu-abu");
      if (_0x2e314e("#action_grey_scale").hasClass("active_box_menu_disabilitas") && action_grey_scale_widget.length == 3) {
        action_grey_scale_widget.length = 0;
        _0x2e314e("#action_grey_scale .box_icon_disabilitas path").each(function (_0x24dca3, _0x22849b) {
          var _0x481018 = _0x22849b.classList.value;
          if (_0x481018.includes("active_icon_svg_grey_scale_color_1")) {
            _0x22849b.classList = "icon_svg_grey_scale_color_1";
          }
          if (_0x481018.includes("active_icon_svg_grey_scale_color_2")) {
            _0x22849b.classList = "icon_svg_grey_scale_color_2";
          }
          if (_0x481018.includes("active_icon_svg_grey_scale_color_3")) {
            _0x22849b.classList = "icon_svg_grey_scale_color_3";
          }
          if (_0x481018.includes("active_icon_svg_grey_scale_color_4")) {
            _0x22849b.classList = "icon_svg_grey_scale_color_4";
          }
        });
        _0x2e314e("#action_grey_scale").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_grey_scale").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        localStorage.removeItem("grey_scale_active");
        if (action_contrash_widget.length == 1) {
          action_warna_kode_1("aktif");
        }
        _0x2e314e("#text_tulisan_grey_scale").text("Kejenuhan");
        _0x2e314e("#list_strip_loading_action_grey_scale").hide();
        strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_1", "noaktif");
        strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_2", "noaktif");
        strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_3", "noaktif");
        _0x2e314e("html").css({
          'filter': ''
        });
      } else {
        if (action_grey_scale_widget.length == 0) {
          localStorage.setItem("grey_scale_active", '1');
          load_active_grey_scale();
          action_grey_scale_widget.push(1);
        } else {
          if (action_grey_scale_widget.length == 1) {
            localStorage.setItem("grey_scale_active", '2');
            load_active_grey_scale_v2();
            action_grey_scale_widget.push(1);
          } else if (action_grey_scale_widget.length == 2) {
            localStorage.setItem("grey_scale_active", '3');
            load_active_grey_scale_v3();
            action_grey_scale_widget.push(1);
          }
        }
      }
    });
    _0x2e314e("#action_kontras").click(function (_0x272203) {
      _0x272203.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "kontras");
      if (_0x2e314e("#action_kontras").hasClass("active_box_menu_disabilitas") && action_contrash_widget.length == 4) {
        action_contrash_widget.length = 0;
        _0x2e314e("#action_kontras").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_kontras").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        _0x2e314e("#action_kontras .box_icon_disabilitas path").each(function (_0x458c7e, _0x2631f4) {
          var _0x159382 = _0x2631f4.classList.value;
          if (_0x159382.includes("active_circle_multi")) {
            _0x2631f4.classList = "circle_multi";
          }
          if (_0x159382.includes("active_circle_single")) {
            _0x2631f4.classList = "circle_single";
          }
        });
        strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_1", "noaktif");
        strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_2", "noaktif");
        strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_3", "noaktif");
        strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_4", "noaktif");
        _0x2e314e("#svg_kontras_multi").show();
        _0x2e314e("#svg_kontras_warna,#svg_kontras_klise,#svg_kontras_light,#svg_balikan_warna").hide();
        _0x2e314e("#text_name_kontras").text("Kontras+");
        action_warna_kode_1("noaktif");
        action_warna_kode_2("noaktif");
        action_warna_kode_3("noaktif");
        action_warna_kode_4("noaktif");
        _0x2e314e("*:not('#widget_menu_disabilitas *')").each(function (_0x3a7c87, _0x150abc) {
          var _0x3d21ca = _0x2e314e(_0x150abc)[0].style['0'];
          if (_0x3d21ca == undefined || _0x3d21ca == null || _0x3d21ca == '') {
            _0x2e314e(_0x150abc).removeAttr("style");
          }
        });
        localStorage.removeItem("action_kontras");
        if (cek_action_sound_search.length > 0) {
          setTimeout(() => {
            callfunction("Kontras+");
          }, 100);
        }
        if (action_grey_scale_widget.length == 1) {
          load_active_grey_scale();
        } else {
          if (action_grey_scale_widget.length == 2) {
            load_active_grey_scale_v2();
          } else if (action_grey_scale_widget.length == 3) {
            load_active_grey_scale_v3();
          }
        }
        if (action_garis_bawahi_tautan_widget.length > 0) {
          if (action_garis_bawahi_tautan_widget.length == 1) {
            action_perataan_text_1_2("rata1", "aktif");
            action_perataan_text_1_2("rata2", "noaktif");
          }
          if (action_garis_bawahi_tautan_widget.length == 2) {
            action_perataan_text_1_2("rata1", "noaktif");
            action_perataan_text_1_2("rata2", "aktif");
          }
        }
      } else {
        load_active_kontras();
        if (action_contrash_widget.length == 0) {
          localStorage.setItem("action_kontras", '1');
          action_kontras_1();
        } else {
          if (action_contrash_widget.length == 1) {
            localStorage.setItem("action_kontras", '2');
            action_kontras_2();
          } else {
            if (action_contrash_widget.length == 2) {
              localStorage.setItem("action_kontras", '3');
              action_kontras_3();
            } else if (action_contrash_widget.length == 3) {
              localStorage.setItem("action_kontras", '4');
              action_kontras_4();
            }
          }
        }
        action_contrash_widget.push(1);
      }
    });
    _0x2e314e("#action_hidden_image").click(function (_0x10d947) {
      _0x10d947.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "sembunyikan-gambar");
      if (_0x2e314e("#action_hidden_image").hasClass("active_box_menu_disabilitas")) {
        action_text_besar.length = 0;
        _0x2e314e("#action_hidden_image").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_hidden_image .box_icon_disabilitas .icon_svg_color").each(function (_0x4d9f78, _0x678dab) {
          var _0x5ae4a2 = _0x678dab.classList.value;
          if (_0x5ae4a2.includes("active_icon_svg_color")) {
            _0x678dab.classList = "icon_svg_color";
          }
        });
        _0x2e314e("#action_hidden_image").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        _0x2e314e("* > img:not(\"#widget_menu_disabilitas *\")").each(function (_0x35bef4, _0x4960bf) {
          _0x2e314e(_0x4960bf).cssImportant("visibility", '');
        });
        localStorage.removeItem("action_hidden_image");
      } else {
        localStorage.setItem("action_hidden_image", '1');
        load_active_hidden_image();
      }
    });
    _0x2e314e("#action_perataan_text").click(function (_0x911a6c) {
      _0x911a6c.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "rata-tulisan");
      if (_0x2e314e("#action_perataan_text").hasClass("active_box_menu_disabilitas") && action_perataan_text_widget.length == 4) {
        action_perataan_text_widget.length = 0;
        _0x2e314e("#action_perataan_text").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_perataan_text .box_icon_disabilitas .icon_svg_sroke_color").each(function (_0x5f27ba, _0x2ffcd9) {
          var _0x57cd2c = _0x2ffcd9.classList.value;
          if (_0x57cd2c.includes("active_icon_svg_sroke_color")) {
            _0x2ffcd9.classList = "icon_svg_sroke_color";
          }
        });
        _0x2e314e("#action_perataan_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_1", "noaktif");
        strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_2", "noaktif");
        strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_3", "noaktif");
        strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_4", "noaktif");
        _0x2e314e("#text_rata_tulisan").text("Rata Tulisan");
        setTimeout(() => {
          callfunction("Rata Tulisan");
        }, 100);
        _0x2e314e("#svg_left_text_icon").show();
        _0x2e314e("#list_strip_loading_perataan_text").hide();
        _0x2e314e("#svg_center_text_icon,#svg_right_text_icon,#svg_right_left_text_icon").hide();
        perataan_all_text("kiri", "noaktif");
        perataan_all_text("tengah", "noaktif");
        perataan_all_text("kanan", "noaktif");
        perataan_all_text("kanan-kiri", "noaktif");
        localStorage.removeItem("perataan_text");
      } else {
        load_active_perataan_text();
        if (action_perataan_text_widget.length == 0) {
          action_perataan_text_1();
          localStorage.setItem("perataan_text", '1');
        } else {
          if (action_perataan_text_widget.length == 1) {
            localStorage.setItem("perataan_text", '2');
            action_perataan_text_2();
          } else {
            if (action_perataan_text_widget.length == 2) {
              localStorage.setItem("perataan_text", '3');
              action_perataan_text_3();
            } else if (action_perataan_text_widget.length == 3) {
              localStorage.setItem("perataan_text", '4');
              action_perataan_text_4();
            }
          }
        }
        action_perataan_text_widget.push(1);
        _0x2e314e("#action_perataan_text").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
      }
    });
    _0x2e314e("#action_tulisan_dapat_di_baca").click(function (_0xdbc534) {
      _0xdbc534.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "tulisan-dapat-dibaca");
      if (_0x2e314e("#action_tulisan_dapat_di_baca").hasClass("active_box_menu_disabilitas") && action_tulisan_dibaca.length == 2) {
        action_tulisan_dibaca.length = 0;
        _0x2e314e("#action_tulisan_dapat_di_baca").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_tulisan_dapat_di_baca .box_icon_disabilitas .icon_svg_color").each(function (_0x1ae80c, _0x554b34) {
          var _0x40d3b1 = _0x554b34.classList.value;
          if (_0x40d3b1.includes("active_icon_svg_color")) {
            _0x554b34.classList = "icon_svg_color";
          }
        });
        _0x2e314e("#list_strip_loading_action_tulisan_dapat_dibaca").hide();
        _0x2e314e("#action_tulisan_dapat_di_baca").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_1", "noaktif");
        strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_2", "noaktif");
        _0x2e314e("#svg_font_di_perbesar").hide();
        _0x2e314e("#svg_dy_seleksia").show();
        _0x2e314e("#text_tulisan_dapat_di_baca").text("Ramah Disleksia");
        localStorage.removeItem("action_tulisan_dpt_dibaca");
        no_active_action_tulisan_dapat_dibaca();
        setTimeout(() => {
          callfunction("Ramah Disleksia");
        }, 100);
      } else {
        load_active_tulisan_dpt_dibaca();
        if (action_tulisan_dibaca.length == 0) {
          localStorage.setItem("action_tulisan_dpt_dibaca", '1');
          active_action_ramah_dyseleksia();
        } else if (action_tulisan_dibaca.length == 1) {
          localStorage.setItem("action_tulisan_dpt_dibaca", '2');
          active_action_tulisan_dapat_dibaca();
        }
        action_tulisan_dibaca.push(1);
      }
    });
    _0x2e314e("#action_tulisan_line_height").click(function (_0x28bca4) {
      _0x28bca4.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "tinggi-garis");
      if (_0x2e314e("#action_tulisan_line_height").hasClass("active_box_menu_disabilitas") && action_line_height_text_widget.length == 3) {
        action_line_height_text_widget.length = 0;
        _0x2e314e("#action_tulisan_line_height").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_tulisan_line_height .box_icon_disabilitas .icon_svg_color").each(function (_0x34067f, _0x448a36) {
          var _0x49f728 = _0x448a36.classList.value;
          if (_0x49f728.includes("active_icon_svg_color")) {
            _0x448a36.classList = "icon_svg_color";
          }
        });
        _0x2e314e("#list_strip_loading_action_tulisan_line_height").hide();
        _0x2e314e("#action_tulisan_line_height").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_1", "noaktif");
        strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_2", "noaktif");
        strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_3", "noaktif");
        _0x2e314e("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *\")").each(function (_0x2dd046, _0x478b93) {
          _0x2e314e(_0x478b93).cssImportant("line-height", '');
        });
        _0x2e314e("#text_id_tinggi_garis").text("Tinggi Garis");
        localStorage.removeItem("action_line_height");
        setTimeout(() => {
          callfunction("Tinggi Garis");
        }, 100);
      } else {
        load_active_tulisan_line_height();
        if (action_line_height_text_widget.length == 0) {
          localStorage.setItem("action_line_height", '1');
          action_line_height_1();
        } else {
          if (action_line_height_text_widget.length == 1) {
            localStorage.setItem("action_line_height", '2');
            action_line_height_2();
          } else if (action_line_height_text_widget.length == 2) {
            localStorage.setItem("action_line_height", '3');
            action_line_height_3();
          }
        }
        action_line_height_text_widget.push(1);
        _0x2e314e("#action_tulisan_line_height").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
      }
    });
    _0x2e314e("#action_animate_pause").click(function (_0x45f3ae) {
      _0x45f3ae.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "animasi-dijeda");
      if (_0x2e314e("#action_animate_pause").hasClass("active_box_menu_disabilitas")) {
        _0x2e314e("#action_animate_pause .box_icon_disabilitas svg *").each(function (_0x3720ea, _0x19a3f8) {
          var _0x43c441 = _0x19a3f8.classList.value;
          if (_0x43c441.includes("active_icon_svg_color")) {
            _0x19a3f8.classList = "icon_svg_color";
          }
          if (_0x43c441.includes("active_icon_svg_sroke_color")) {
            _0x19a3f8.classList = "icon_svg_sroke_color";
          }
        });
        _0x2e314e("#action_animate_pause").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_animate_pause").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        _0x2e314e("#svg_animasi_play").hide();
        _0x2e314e("#svg_animasi_pause").show();
        clearInterval(interval_animate_widget);
        jQuery.fx.off = false;
        _0x2e314e(filter_hight_jquery_v3).each(function (_0x310115, _0x5c78eb) {
          _0x2e314e(_0x5c78eb).cssImportant("animation-duration", '');
          _0x2e314e(_0x5c78eb).cssImportant("transform", '');
          _0x2e314e(_0x5c78eb).cssImportant("transition", '');
          _0x2e314e(_0x5c78eb).cssImportant("animation", '');
          _0x2e314e(_0x5c78eb).cssImportant("animation-play-state", '');
          _0x2e314e(_0x5c78eb).cssImportant("-webkit-animation-play-state", '');
          _0x2e314e(_0x5c78eb).cssImportant("-moz-animation-play-state", '');
          _0x2e314e(_0x5c78eb).cssImportant("-o-animation-play-state", '');
          _0x2e314e(_0x5c78eb).clearQueue();
        });
        _0x45f3ae.cancelBubble = false;
        _0x2e314e("#text_id_animasi").text("Animasi Dijeda");
        setTimeout(() => {
          callfunction("Animasi Dijeda");
        }, 100);
        localStorage.removeItem("action_animate_pause");
      } else {
        load_active_animate_pause();
        localStorage.setItem("action_animate_pause", '1');
        _0x45f3ae.cancelBubble = true;
      }
    });
    _0x2e314e("#action_kursor").click(function (_0x882641) {
      _0x882641.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "kursor");
      if (_0x2e314e("#action_kursor").hasClass("active_box_menu_disabilitas") && action_kursor_widget.length == 3) {
        action_kursor_widget.length = 0;
        _0x2e314e("#action_kursor").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_kursor .box_icon_disabilitas .icon_svg_color").each(function (_0x339c5a, _0x397cba) {
          var _0xd2e1f8 = _0x397cba.classList.value;
          if (_0xd2e1f8.includes("active_icon_svg_color")) {
            _0x397cba.classList = "icon_svg_color";
          }
        });
        _0x2e314e("#action_kursor").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        _0x2e314e('*').removeClass("cursor_website_all");
        localStorage.removeItem("action_kursor_change");
        _0x2e314e("#list_strip_loading_action_kursor").hide();
        _0x2e314e("#text_id_kursor").text("Kursor");
        strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_1", "noaktif");
        strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_2", "noaktif");
        strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_3", "noaktif");
        _0x2e314e("#svg_kursor_web").show();
        _0x2e314e("#svg_kursor_masker,#svg_kursor_masker_v2,#slider_mouse_masked,#slider_mouse_masked_line").hide();
      } else {
        if (action_kursor_widget.length == 0) {
          localStorage.setItem("action_kursor_change", '1');
          action_kursor_widget_1();
        } else {
          if (action_kursor_widget.length == 1) {
            localStorage.setItem("action_kursor_change", '2');
            action_kursor_widget_2();
          } else if (action_kursor_widget.length == 2) {
            localStorage.setItem("action_kursor_change", '3');
            action_kursor_widget_3();
          }
        }
        action_kursor_widget.push(1);
      }
    });
    _0x2e314e("#action_space_text").click(function (_0x48a4c5) {
      _0x48a4c5.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "spasi-teks");
      if (_0x2e314e("#action_space_text").hasClass("active_box_menu_disabilitas") && action_space_text_widget.length == 3) {
        action_space_text_widget.length = 0;
        _0x2e314e("#action_space_text").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_space_text .box_icon_disabilitas .icon_svg_color").each(function (_0x18da71, _0x256422) {
          var _0x279b69 = _0x256422.classList.value;
          if (_0x279b69.includes("active_icon_svg_color")) {
            _0x256422.classList = "icon_svg_color";
          }
        });
        _0x2e314e("#list_strip_loading_action_space_text").hide();
        _0x2e314e("#action_space_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_1", "noaktif");
        strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_2", "noaktif");
        strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_3", "noaktif");
        _0x2e314e("div > *:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas\")").css({
          'letter-spacing': ''
        });
        _0x2e314e("#id_space_text").text("Spasi Teks");
        setTimeout(() => {
          callfunction("Spasi Teks");
        }, 100);
        localStorage.removeItem("action_space_text");
      } else {
        load_active_space_text();
        if (action_space_text_widget.length == 0) {
          localStorage.setItem("action_space_text", '1');
          action_space_text_1();
        } else {
          if (action_space_text_widget.length == 1) {
            localStorage.setItem("action_space_text", '2');
            action_space_text_2();
          } else if (action_space_text_widget.length == 2) {
            localStorage.setItem("action_space_text", '3');
            action_space_text_3();
          }
        }
        action_space_text_widget.push(1);
        _0x2e314e("#action_space_text").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
      }
    });
    _0x2e314e("#action_perkecil_text").click(function (_0x494a69) {
      _0x494a69.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "perkecil-teks");
      if (_0x2e314e("#action_perkecil_text").hasClass("active_box_menu_disabilitas") && action_text_kecil.length == 4) {
        clear_set_text_kecil();
      } else {
        clear_set_text_besar();
        load_active_text_kecil();
        if (action_text_kecil.length == 0) {
          localStorage.setItem("text_kecil", '1');
          text_kecil_1();
        } else {
          if (action_text_kecil.length == 1) {
            localStorage.setItem("text_kecil", '2');
            text_kecil_2();
          } else {
            if (action_text_kecil.length == 2) {
              localStorage.setItem("text_kecil", '3');
              text_kecil_3();
            } else if (action_text_kecil.length == 3) {
              localStorage.setItem("text_kecil", '4');
              text_kecil_4();
            }
          }
        }
        action_text_kecil.push(1);
        _0x2e314e("#action_perkecil_text").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
      }
    });
    _0x2e314e("#action_garis_bawahi_tautan").click(function (_0x5c6eb0) {
      _0x5c6eb0.preventDefault();
      _0x5823f3('no');
      hit_api_tracking(base_url_website, "garis-bawahi-tautan");
      if (_0x2e314e("#action_garis_bawahi_tautan").hasClass("active_box_menu_disabilitas") && action_garis_bawahi_tautan_widget.length == 2) {
        action_garis_bawahi_tautan_widget.length = 0;
        _0x2e314e("#action_garis_bawahi_tautan").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_garis_bawahi_tautan .box_icon_disabilitas .icon_fill_svg_color_black").each(function (_0x4b0aa3, _0x1bec66) {
          var _0x40faab = _0x1bec66.classList.value;
          if (_0x40faab.includes("active_icon_fill_svg_color_black")) {
            _0x1bec66.classList = "icon_fill_svg_color_black";
          }
        });
        _0x2e314e("#list_strip_loading_action_garis_bawahi_tautan").hide();
        _0x2e314e("#action_garis_bawahi_tautan").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_1", "noaktif");
        strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_2", "noaktif");
        strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_3", "noaktif");
        _0x2e314e("#svg_decoration_link").show();
        _0x2e314e("#svg_block_decoration_link").hide();
        action_perataan_text_1_2("rata1", "noaktif");
        action_perataan_text_1_2("rata2", "noaktif");
        _0x2e314e("#text_garis_bawahi_tautan").text("Garis Bawahi Tautan");
        setTimeout(() => {
          callfunction("Garis Bawahi Tautan");
        }, 100);
        localStorage.removeItem("action_link_all");
      } else {
        load_active_link_all();
        if (action_garis_bawahi_tautan_widget.length == 0) {
          localStorage.setItem("action_link_all", '1');
          action_garis_link_1();
        } else if (action_garis_bawahi_tautan_widget.length == 1) {
          localStorage.setItem("action_link_all", '2');
          action_garis_link_2();
        }
        action_garis_bawahi_tautan_widget.push(1);
        _0x2e314e("#action_garis_bawahi_tautan").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
      }
    });
    _0x2e314e("#dropdown_bahasa_widget").click(function (_0x5dbd49) {
      _0x5dbd49.preventDefault();
    });
    _0x2e314e("#dropdown_profile_widget").click(function (_0xb3f24b) {
      _0xb3f24b.preventDefault();
      var _0x2be433 = _0x2e314e("#dropdown_profile_widget").attr("aria-expanded");
      if (_0x2be433 == "true") {
        _0x2e314e("#dropdown_profile_widget").attr("aria-expanded", "false");
        _0x2e314e("#show_profile_widget_dsb").hide();
      } else {
        _0x2e314e("#dropdown_profile_widget").attr("aria-expanded", "true");
        _0x2e314e("#show_profile_widget_dsb").show();
      }
    });
    Array.prototype.remove = function (_0x2704b5, _0x4d9157) {
      var _0xa237 = this.slice((_0x4d9157 || _0x2704b5) + 1 || this.length);
      this.length = _0x2704b5 < 0 ? this.length + _0x2704b5 : _0x2704b5;
      return this.push.apply(this, _0xa237);
    };
    _0x2e314e("#action_gangguan_motorik").click(function (_0x327495) {
      hit_api_tracking(base_url_website, "gangguan-motorik");
      _0x235d04("#action_gangguan_motorik");
    });
    _0x2e314e("#action_netra_total").click(function (_0x1b962e) {
      hit_api_tracking(base_url_website, "netra-total");
      _0x235d04("#action_netra_total");
    });
    _0x2e314e("#action_buta_warna").click(function (_0x3817f6) {
      hit_api_tracking(base_url_website, "buta-warna");
      _0x235d04("#action_buta_warna");
    });
    _0x2e314e("#action_disleksia").click(function (_0x5dabf9) {
      hit_api_tracking(base_url_website, "diseleksia");
      _0x235d04("#action_disleksia");
    });
    _0x2e314e("#action_gangguan_pengelihatan").click(function (_0x16bdbe) {
      hit_api_tracking(base_url_website, "gangguan-pengelihatan");
      _0x235d04("#action_gangguan_pengelihatan");
    });
    _0x2e314e("#action_kognitif_pembelajaran").click(function (_0x512637) {
      hit_api_tracking(base_url_website, "kognitif-pembelajaran");
      _0x235d04("#action_kognitif_pembelajaran");
    });
    _0x2e314e("#action_kejang_dan_epilepsi").click(function (_0x5065e9) {
      hit_api_tracking(base_url_website, "kejang-dan-epilepsi");
      _0x235d04("#action_kejang_dan_epilepsi");
    });
    _0x2e314e("#action_adhd").click(function (_0x4be6eb) {
      hit_api_tracking(base_url_website, "adhd");
      _0x235d04("#action_adhd");
    });
    _0x2e314e("#action_tooltip").click(function (_0xdef5d7) {
      _0xdef5d7.preventDefault();
      setTimeout(() => {
        _0x5823f3('no');
      }, 100);
      hit_api_tracking(base_url_website, "tooltip");
      if (_0x2e314e("#action_tooltip").hasClass("active_box_menu_disabilitas") && action_tooltip_widget.length == 1) {
        action_tooltip_widget.length = 0;
        _0x2e314e("#action_tooltip").removeClass("active_box_menu_disabilitas");
        _0x2e314e("#action_tooltip").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
        _0x2e314e("#action_tooltip .box_icon_disabilitas .icon_svg_color").each(function (_0x63b49f, _0xb6bd5a) {
          var _0x583584 = _0xb6bd5a.classList.value;
          if (_0x583584.includes("icon_svg_color")) {
            _0xb6bd5a.classList = "icon_svg_color";
          }
        });
        _0x2e314e("#move_tooltip_data").css("display", "none");
        localStorage.removeItem("tooltip_active");
        setTimeout(async () => {
          _0x2e314e(".tooltip_data_move_mouse_new").css({
            'left': '',
            'top': ''
          });
        }, 125);
      } else {
        action_tooltip_widget.length = 0;
        localStorage.setItem("tooltip_active", '1');
        action_tooltip_widget.push(1);
        _0x2e314e("#move_tooltip_data").css("display", "none");
        setTimeout(() => {
          load_active_tooltip_teks_action();
        }, 125);
      }
    });
    _0x2e314e("#reset_pengaturan_all_dsb").click(function (_0x2bb486) {
      _0x2bb486.preventDefault();
      _0x2f24a8();
    });
    function _0x2f24a8() {
      if (position_default == "left_bottom") {
        _0x5b0e0b("left_bottom", "click");
      } else if (position_default == "right_bottom") {
        _0x5b0e0b("right_bottom", "click");
      }
      localStorage.removeItem("position_widget");
      hit_api_tracking(base_url_website, "reset-pengaturan-disabilitas");
      _0x2e314e('*').each(function (_0x35c6d4, _0x28c3af) {
        _0x2e314e(_0x28c3af).css({
          'opacity': '',
          'border-color': ''
        });
      });
      _0x2e314e("*:not(\".fa-search,.titletools,svg,.btn-color-mode-switch-inner,.Vue-Toastification__container\")").cssImportant("border-color", '');
      _0x2e314e("#action_moda_suara").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_moda_suara .box_icon_disabilitas .active_icon_svg_sroke_color").each(function (_0xcc583e, _0x23dbcc) {
        var _0x30c11b = _0x23dbcc.classList.value;
        if (_0x30c11b.includes("active_icon_svg_sroke_color")) {
          _0x23dbcc.classList = "icon_svg_sroke_color";
        }
      });
      _0x2e314e("#action_moda_suara").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      localStorage.setItem("permisvoice", "off");
      action_text_besar.length = 0;
      _0x2e314e("#action_perbesar_text").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_perbesar_text .box_icon_disabilitas .icon_svg_color").each(function (_0x4a732c, _0xb21619) {
        var _0x18d8aa = _0xb21619.classList.value;
        if (_0x18d8aa.includes("active_icon_svg_color")) {
          _0xb21619.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#action_perbesar_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_1", "noaktif");
      strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_2", "noaktif");
      strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_3", "noaktif");
      strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_4", "noaktif");
      _0x2e314e("*:not(\"#widget_menu_disabilitas *\")").css({
        'font-size': ''
      });
      action_grey_scale_widget.length = 0;
      _0x2e314e("#action_grey_scale .box_icon_disabilitas path").each(function (_0x4b9f11, _0x6744c6) {
        var _0x265159 = _0x6744c6.classList.value;
        if (_0x265159.includes("active_icon_svg_grey_scale_color_1")) {
          _0x6744c6.classList = "icon_svg_grey_scale_color_1";
        }
        if (_0x265159.includes("active_icon_svg_grey_scale_color_2")) {
          _0x6744c6.classList = "icon_svg_grey_scale_color_2";
        }
        if (_0x265159.includes("active_icon_svg_grey_scale_color_3")) {
          _0x6744c6.classList = "icon_svg_grey_scale_color_3";
        }
        if (_0x265159.includes("active_icon_svg_grey_scale_color_4")) {
          _0x6744c6.classList = "icon_svg_grey_scale_color_4";
        }
      });
      _0x2e314e("#action_grey_scale").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_grey_scale").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e("#text_tulisan_grey_scale").text("Kejenuhan");
      _0x2e314e("#list_strip_loading_action_grey_scale").hide();
      strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_1", "noaktif");
      strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_2", "noaktif");
      strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_3", "noaktif");
      _0x2e314e("html").css({
        'filter': ''
      });
      action_contrash_widget.length = 0;
      _0x2e314e("#action_kontras").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_kontras").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e("#action_kontras .box_icon_disabilitas path").each(function (_0x300e9d, _0x4b777a) {
        var _0x13e49d = _0x4b777a.classList.value;
        if (_0x13e49d.includes("active_circle_multi")) {
          _0x4b777a.classList = "circle_multi";
        }
        if (_0x13e49d.includes("active_circle_single")) {
          _0x4b777a.classList = "circle_single";
        }
      });
      strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_1", "noaktif");
      strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_2", "noaktif");
      strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_3", "noaktif");
      strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_4", "noaktif");
      _0x2e314e("#svg_kontras_multi").show();
      _0x2e314e("#svg_kontras_warna,#svg_kontras_klise,#svg_kontras_light,#svg_balikan_warna").hide();
      _0x2e314e("#text_name_kontras").text(" Kontras+");
      action_warna_kode_1("noaktif");
      action_warna_kode_2("noaktif");
      action_warna_kode_3("noaktif");
      action_warna_kode_4("noaktif");
      action_perataan_text_widget.length = 0;
      _0x2e314e("#action_perataan_text").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_perataan_text .box_icon_disabilitas .icon_svg_sroke_color").each(function (_0x5ef296, _0x384ab3) {
        var _0xf8ac26 = _0x384ab3.classList.value;
        if (_0xf8ac26.includes("active_icon_svg_sroke_color")) {
          _0x384ab3.classList = "icon_svg_sroke_color";
        }
      });
      _0x2e314e("#action_perataan_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_1", "noaktif");
      strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_2", "noaktif");
      strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_3", "noaktif");
      strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_4", "noaktif");
      _0x2e314e("#text_rata_tulisan").text("Rata Tulisan");
      _0x2e314e("#svg_left_text_icon").show();
      _0x2e314e("#svg_center_text_icon,#svg_right_text_icon,#svg_right_left_text_icon").hide();
      perataan_all_text("kiri", "noaktif");
      perataan_all_text("tengah", "noaktif");
      perataan_all_text("kanan", "noaktif");
      perataan_all_text("kanan-kiri", "noaktif");
      _0x2e314e("#action_hidden_image").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_hidden_image .box_icon_disabilitas .icon_svg_color").each(function (_0x9eaa9, _0x3ef47e) {
        var _0x294546 = _0x3ef47e.classList.value;
        if (_0x294546.includes("active_icon_svg_color")) {
          _0x3ef47e.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#action_hidden_image").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e("* > img:not(\"#widget_menu_disabilitas *\")").each(function (_0x34efcb, _0x1426ed) {
        _0x2e314e(_0x1426ed).cssImportant("visibility", '');
      });
      action_tulisan_dibaca.length = 0;
      _0x2e314e("#svg_font_di_perbesar").hide();
      _0x2e314e("#action_tulisan_dapat_di_baca").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_tulisan_dapat_di_baca .box_icon_disabilitas .icon_svg_color").each(function (_0x5a694c, _0x10d20e) {
        var _0x28c255 = _0x10d20e.classList.value;
        if (_0x28c255.includes("active_icon_svg_color")) {
          _0x10d20e.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#svg_dy_seleksia").show();
      _0x2e314e("#list_strip_loading_action_tulisan_dapat_dibaca").hide();
      _0x2e314e("#action_tulisan_dapat_di_baca").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_1", "noaktif");
      strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_2", "noaktif");
      _0x2e314e("#text_tulisan_dapat_di_baca").text("Ramah Disleksia");
      setTimeout(() => {
        no_active_action_tulisan_dapat_dibaca();
      }, 90);
      action_line_height_text_widget.length = 0;
      _0x2e314e("#action_tulisan_line_height").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_tulisan_line_height .box_icon_disabilitas .icon_svg_color").each(function (_0x2a1833, _0x55e76f) {
        var _0x1e04dd = _0x55e76f.classList.value;
        if (_0x1e04dd.includes("active_icon_svg_color")) {
          _0x55e76f.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#action_tulisan_line_height").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_1", "noaktif");
      strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_2", "noaktif");
      strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_3", "noaktif");
      _0x2e314e("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *\")").each(function (_0x77cac8, _0x112609) {
        _0x2e314e(_0x112609).cssImportant("line-height", '');
      });
      _0x2e314e("#text_id_tinggi_garis").text("Tinggi Garis");
      _0x2e314e("#action_animate_pause .box_icon_disabilitas svg *").each(function (_0x17b07e, _0x552e38) {
        var _0x5c627d = _0x552e38.classList.value;
        if (_0x5c627d.includes("active_icon_svg_color")) {
          _0x552e38.classList = "icon_svg_color";
        }
        if (_0x5c627d.includes("active_icon_svg_sroke_color")) {
          _0x552e38.classList = "icon_svg_sroke_color";
        }
      });
      _0x2e314e("#action_animate_pause").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_animate_pause").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e("#svg_animasi_play").hide();
      _0x2e314e("#svg_animasi_pause").show();
      clearInterval(interval_animate_widget);
      jQuery.fx.off = false;
      _0x2e314e(filter_hight_jquery_v3).each(function (_0x26ee04, _0xd58e6d) {
        _0x2e314e(_0xd58e6d).cssImportant("animation-duration", '');
        _0x2e314e(_0xd58e6d).cssImportant("transform", '');
        _0x2e314e(_0xd58e6d).cssImportant("transition", '');
        _0x2e314e(_0xd58e6d).cssImportant("animation", '');
        _0x2e314e(_0xd58e6d).cssImportant("animation-play-state", '');
        _0x2e314e(_0xd58e6d).cssImportant("-webkit-animation-play-state", '');
        _0x2e314e(_0xd58e6d).cssImportant("-moz-animation-play-state", '');
        _0x2e314e(_0xd58e6d).cssImportant("-o-animation-play-state", '');
        _0x2e314e(_0xd58e6d).clearQueue();
      });
      _0x2e314e("#text_id_animasi").text("Animasi Dijeda");
      action_kursor_widget.length = 0;
      _0x2e314e("#action_kursor").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_kursor .box_icon_disabilitas .icon_svg_color").each(function (_0x20338e, _0x30f24c) {
        var _0x2b0063 = _0x30f24c.classList.value;
        if (_0x2b0063.includes("active_icon_svg_color")) {
          _0x30f24c.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#action_kursor").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e('*').removeClass("cursor_website_all");
      _0x2e314e("#list_strip_loading_action_kursor").hide();
      strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_1", "noaktif");
      strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_2", "noaktif");
      strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_3", "noaktif");
      _0x2e314e("#svg_kursor_web").show();
      _0x2e314e("#svg_kursor_masker").hide();
      _0x2e314e("#svg_kursor_masker_v2").hide();
      action_kursor_widget.length = 0;
      _0x2e314e("#action_kursor").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_kursor .box_icon_disabilitas .icon_svg_color").each(function (_0x3a44ba, _0x3a156d) {
        var _0x42dd10 = _0x3a156d.classList.value;
        if (_0x42dd10.includes("active_icon_svg_color")) {
          _0x3a156d.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#action_kursor").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e("#list_strip_loading_action_kursor").hide();
      strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_1", "noaktif");
      strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_2", "noaktif");
      strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_3", "noaktif");
      setTimeout(() => {
        data_move_mouse();
        _0x2e314e("#text_id_kursor").text("Kursor");
      }, 100);
      action_space_text_widget.length = 0;
      _0x2e314e("#action_space_text").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_space_text .box_icon_disabilitas .icon_svg_color").each(function (_0x4f9b47, _0x4c76ee) {
        var _0x445351 = _0x4c76ee.classList.value;
        if (_0x445351.includes("active_icon_svg_color")) {
          _0x4c76ee.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#list_strip_loading_action_space_text").hide();
      _0x2e314e("#action_space_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_1", "noaktif");
      strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_2", "noaktif");
      strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_3", "noaktif");
      _0x2e314e("div > *:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas\")").css({
        'letter-spacing': ''
      });
      _0x2e314e("#id_space_text").text("Spasi Teks");
      action_text_kecil.length = 0;
      _0x2e314e("#action_perkecil_text").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_perkecil_text .box_icon_disabilitas .icon_svg_color").each(function (_0x212832, _0x352891) {
        var _0x4b9b2d = _0x352891.classList.value;
        if (_0x4b9b2d.includes("active_icon_svg_color")) {
          _0x352891.classList = "icon_svg_color";
        }
      });
      _0x2e314e("#action_perkecil_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_1", "noaktif");
      strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_2", "noaktif");
      strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_3", "noaktif");
      strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_4", "noaktif");
      _0x2e314e("*:not(\"#widget_menu_disabilitas *\")").css({
        'font-size': ''
      });
      action_garis_bawahi_tautan_widget.length = 0;
      _0x2e314e("#action_garis_bawahi_tautan").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_garis_bawahi_tautan .box_icon_disabilitas .icon_fill_svg_color_black").each(function (_0x7ab8, _0x4b9cda) {
        var _0x5015e1 = _0x4b9cda.classList.value;
        if (_0x5015e1.includes("active_icon_fill_svg_color_black")) {
          _0x4b9cda.classList = "icon_fill_svg_color_black";
        }
      });
      _0x2e314e("#list_strip_loading_action_garis_bawahi_tautan").hide();
      _0x2e314e("#action_garis_bawahi_tautan").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_1", "noaktif");
      strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_2", "noaktif");
      strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_3", "noaktif");
      _0x2e314e("#svg_decoration_link").show();
      _0x2e314e("#svg_block_decoration_link").hide();
      action_perataan_text_1_2("rata1", "noaktif");
      action_perataan_text_1_2("rata2", "noaktif");
      _0x2e314e("#action_tooltip").removeClass("active_box_menu_disabilitas");
      _0x2e314e("#action_tooltip").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
      _0x2e314e("#action_tooltip .box_icon_disabilitas .icon_svg_color").each(function (_0x163ca6, _0xb39c9) {
        var _0x28c208 = _0xb39c9.classList.value;
        if (_0x28c208.includes("icon_svg_color")) {
          _0xb39c9.classList = "icon_svg_color";
        }
      });
      _0x2e314e(".tooltip_data_move_mouse_new").css({
        'left': '',
        'top': ''
      });
      _0x2e314e("#move_tooltip_data").css("display", "none");
      localStorage.clear();
      if (getOS() == "Android") {
        _0x2e314e(".column_text_persegi_riset").cssImportant("font-size", "12px");
      }
      _0x5823f3('no');
      _0x2e314e("#text_name_profile_widget").text("Profil Aksesbilitas");
    }
    function _0x5ab51f(_0x5ac785, _0x13d1a5) {
      if (_0x2e314e(_0x5ac785).hasClass("active_box_profile_aksesbilitas") || _0x13d1a5 == "noactive") {
        _0x2e314e(_0x5ac785).removeClass("active_box_profile_aksesbilitas");
        _0x2e314e(_0x5ac785 + " *").each(function (_0x4856f4, _0x5b19e1) {
          var _0x56430b = _0x5b19e1.classList.value;
          if (_0x56430b.includes("active_color_svg_content_profile_disabilitas")) {
            _0x5b19e1.classList = "color_svg_content_profile_disabilitas";
          }
          if (_0x56430b.includes("active_text_list_content_profile_disabilitas")) {
            _0x5b19e1.classList = "text_list_content_profile_disabilitas";
          }
          if (_0x56430b.includes("active_fill_icon_dsb")) {
            _0x5b19e1.classList = "fill_icon_dsb";
          }
          if (_0x56430b.includes("active_icon_list_content_profile_disabilitas")) {
            _0x5b19e1.classList = "icon_list_content_profile_disabilitas";
          }
        });
      } else {
        if (_0x13d1a5 == "active") {
          _0x2f24a8();
          _0x2e314e(_0x5ac785).addClass("active_box_profile_aksesbilitas");
          _0x2e314e(_0x5ac785 + " *").each(function (_0x26ec50, _0x311c88) {
            var _0xec7450 = _0x311c88.classList.value;
            if (_0xec7450.includes("color_svg_content_profile_disabilitas")) {
              _0x311c88.classList = "active_color_svg_content_profile_disabilitas";
            }
            if (_0xec7450.includes("fill_icon_dsb")) {
              _0x311c88.classList = "fill_icon_dsb active_fill_icon_dsb";
            }
            if (_0xec7450.includes("text_list_content_profile_disabilitas")) {
              _0x311c88.classList = "text_list_content_profile_disabilitas active_text_list_content_profile_disabilitas";
            }
            if (_0xec7450.includes("icon_list_content_profile_disabilitas")) {
              _0x311c88.classList = "icon_list_content_profile_disabilitas active_icon_list_content_profile_disabilitas";
            }
          });
          if (_0x5ac785 == "#action_gangguan_motorik") {
            localStorage.setItem("action_widget_profil", '1');
            localStorage.setItem("action_animate_pause", '1');
            localStorage.setItem("tooltip_active", '1');
            action_gangguna_motorik_process();
            _0x2e314e("#text_name_profile_widget").text("Gangguan Motorik Profil Aktif");
          } else {
            if (_0x5ac785 == "#action_netra_total") {
              localStorage.setItem("action_widget_profil", '2');
              _0x3211b5();
              _0x2e314e("#text_name_profile_widget").text("Netra Total Profil Aktif");
            } else {
              if (_0x5ac785 == "#action_buta_warna") {
                localStorage.setItem("action_widget_profil", '3');
                localStorage.setItem("grey_scale_active", '2');
                action_buta_warna_process();
                _0x2e314e("#text_name_profile_widget").text("Buta Warna Profil Aktif");
              } else {
                if (_0x5ac785 == "#action_disleksia") {
                  localStorage.setItem("action_widget_profil", '4');
                  localStorage.setItem("action_tulisan_dpt_dibaca", '1');
                  action_disleksia_process();
                  _0x2e314e("#text_name_profile_widget").text("Disleksia Profil Aktif");
                } else {
                  if (_0x5ac785 == "#action_gangguan_pengelihatan") {
                    localStorage.setItem("action_widget_profil", '5');
                    localStorage.setItem("grey_scale_active", '2');
                    localStorage.setItem("text_besar", '1');
                    localStorage.setItem("action_tulisan_dpt_dibaca", '2');
                    localStorage.setItem("action_kursor_change", '1');
                    localStorage.setItem("action_animate_pause", '1');
                    localStorage.setItem("tooltip_active", '1');
                    action_gangguan_pengelihatan_process();
                    _0x2e314e("#text_name_profile_widget").text("Gangguan Pengelihatan Profil Aktif");
                  } else {
                    if (_0x5ac785 == "#action_kognitif_pembelajaran") {
                      localStorage.setItem("action_widget_profil", '6');
                      localStorage.setItem("text_besar", '1');
                      localStorage.setItem("action_animate_pause", '1');
                      localStorage.setItem("action_kursor_change", '3');
                      localStorage.setItem("tooltip_active", '1');
                      action_kognitif_pembelajaran_process();
                      _0x2e314e("#text_name_profile_widget").text("Kognitif & Pembelajaran Profil Aktif");
                    } else {
                      if (_0x5ac785 == "#action_kejang_dan_epilepsi") {
                        localStorage.setItem("action_widget_profil", '7');
                        localStorage.setItem("grey_scale_active", '1');
                        localStorage.setItem("action_animate_pause", '1');
                        action_kejang_dan_epilepsi_process();
                        _0x2e314e("#text_name_profile_widget").text("Kejang dan Epilepsi Profil Aktif");
                      } else {
                        if (_0x5ac785 == "#action_adhd") {
                          localStorage.setItem("action_widget_profil", '8');
                          localStorage.setItem("grey_scale_active", '1');
                          localStorage.setItem("action_kursor_change", '2');
                          action_adhd_process();
                          _0x2e314e("#text_name_profile_widget").text("ADHD Profil Aktif");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    function _0x3211b5() {
      setTimeout(async () => {
        _0x1750c5();
      }, 100);
    }
    function _0x56780c(_0x32954b) {
      if (_0x2e314e(_0x32954b).hasClass("active_box_profile_aksesbilitas")) {
        _0x2e314e(_0x32954b).removeClass("active_box_profile_aksesbilitas");
        _0x2e314e(_0x32954b + " *").each(function (_0x251dc1, _0x20c69a) {
          var _0x34eb9d = _0x20c69a.classList.value;
          if (_0x34eb9d.includes("active_color_svg_content_profile_disabilitas")) {
            _0x20c69a.classList = "color_svg_content_profile_disabilitas";
          }
          if (_0x34eb9d.includes("active_text_list_content_profile_disabilitas")) {
            _0x20c69a.classList = "text_list_content_profile_disabilitas";
          }
          if (_0x34eb9d.includes("active_fill_icon_dsb")) {
            _0x20c69a.classList = "fill_icon_dsb";
          }
          if (_0x34eb9d.includes("active_icon_list_content_profile_disabilitas")) {
            _0x20c69a.classList = "icon_list_content_profile_disabilitas";
          }
        });
      }
    }
    function _0x5823f3(_0xf45377) {
      var _0x39384a = ["action_gangguan_motorik", "action_netra_total", "action_buta_warna", "action_disleksia", "action_gangguan_pengelihatan", "action_kognitif_pembelajaran", "action_kejang_dan_epilepsi", "action_adhd"];
      for (let _0x11961c = 0; _0x11961c < _0x39384a.length; _0x11961c++) {
        var _0x263626 = '#' + _0x39384a[_0x11961c];
        _0x56780c(_0x263626);
      }
      if (_0xf45377 == "all") {
        _0x2f24a8();
      }
      localStorage.removeItem("action_widget_profil");
    }
    function _0x235d04(_0x35e422) {
      var _0x848534 = _0x35e422.replace('#', '');
      if (_0x2e314e(_0x35e422).hasClass("active_box_profile_aksesbilitas")) {
        _0x5823f3("all");
      } else {
        _0x5ab51f(_0x35e422, "active");
      }
      var _0x4055b2 = ["action_gangguan_motorik", "action_netra_total", "action_buta_warna", "action_disleksia", "action_gangguan_pengelihatan", "action_kognitif_pembelajaran", "action_kejang_dan_epilepsi", "action_adhd"];
      var _0x435879 = _0x4055b2.indexOf(_0x848534);
      _0x4055b2.remove(_0x435879);
      for (let _0x16facf = 0; _0x16facf < _0x4055b2.length; _0x16facf++) {
        var _0x43e3ca = '#' + _0x4055b2[_0x16facf];
        _0x5ab51f(_0x43e3ca, "noactive");
      }
    }
    _0x2e314e(document).on("mouseover", "a > *", function () {
      var _0x385a76 = _0x2e314e(this).text().toString();
      speach(_0x385a76);
      speachmobile(_0x385a76);
    });
    _0x2e314e(document).on("mouseover", 'a', function () {
      var _0x16804e = _0x2e314e(this).text().toString();
      speach(_0x16804e);
      speachmobile(_0x16804e);
    });
    if (!window.James) {
      James = {};
    }
    James.Selector = {};
    James.Selector.mouseup = function () {
      var _0x12a957;
      if (window.getSelection) {
        _0x12a957 = window.getSelection();
      } else if (document.selection) {
        _0x12a957 = document.selection.createRange();
      }
      var _0x6ed0ac = _0x12a957;
      if (_0x12a957.text) {
        _0x6ed0ac = _0x12a957.text;
      }
      if (_0x6ed0ac != '') {
        var _0x13db34 = window.getSelection().toString();
        speach(_0x13db34);
      }
    };
    _0x2e314e(document).ready(function () {
      _0x2e314e(document).bind("mouseup", James.Selector.mouseup);
    });
    _0x2e314e(document).ready(function () {
      document.addEventListener("selectionchange", function (_0x9e4682) {
        var _0x9a5227 = localStorage.getItem("permismobile");
        if (_0x9a5227 != null && _0x9a5227 == 'on') {
          const _0x2f3292 = window.getSelection();
          if (_0x2f3292.rangeCount === 0) {
            return;
          }
          const _0xb8521c = _0x2f3292.toString();
          if (!(!_0xb8521c || /^\s*$/.test(_0xb8521c)) && _0xb8521c != undefined && _0xb8521c != '') {
            speachmobile(_0xb8521c);
          }
        }
      });
    });
    _0x2e314e(document).on("mouseover", ".box_group_disabilitas", function () {
      var _0x2d0dbb = _0x2e314e(this).text().toString();
      callfunction(_0x2d0dbb);
    });
    _0x2e314e(document).on("mouseover", ".row_persegi_reset", function () {
      var _0x5413f3 = _0x2e314e(this).text().toString();
      callfunction(_0x5413f3);
    });
    _0x2e314e(".reset_pengaturan_all_dsb").on("hover", function (_0x2f3824) {
      if (_0x2f3824.type == "mouseenter") {} else {
        if (_0x2f3824.type == "mouseleave") {}
      }
    });
  });
}
function get_data_array() {
  var _0xb50c35 = tampung_text.filter(_0x29afe2 => _0x29afe2);
  var _0x33f1f4 = _0xb50c35.filter(function (_0x5565e6, _0x551442) {
    return _0xb50c35.indexOf(_0x5565e6) == _0x551442;
  });
  for (let _0x3262a0 of _0x33f1f4) {
    if (_0x3262a0.length >= 3 && _0x3262a0.length < 125) {
      var _0x1f50fd = "button:contains('" + _0x3262a0 + "'), div:contains('" + _0x3262a0 + "'), p:contains('" + _0x3262a0 + "') , span:contains('" + _0x3262a0 + "') ,   a:contains('" + _0x3262a0 + "'),  label:contains('" + _0x3262a0 + "'), strong:contains('" + _0x3262a0 + "'),h1:contains('" + _0x3262a0 + "'),\n        h2:contains('" + _0x3262a0 + "'),h3:contains('" + _0x3262a0 + "'),h4:contains('" + _0x3262a0 + "'),h5:contains('" + _0x3262a0 + "'),h6:contains('" + _0x3262a0 + "')";
      $(_0x1f50fd).filter(function () {
        return $(this).clone().children().remove().end().filter(":contains('" + _0x3262a0 + "')").length > 0;
      }).attr("data-tooltip", _0x3262a0);
    }
  }
}
function cek_grey_scale_active_no_active() {
  if (action_grey_scale_widget.length == 1 && action_contrash_widget.length > 0) {
    load_active_grey_scale();
  } else {
    if (action_grey_scale_widget.length == 2 && action_contrash_widget.length > 0) {
      load_active_grey_scale_v2();
    } else if (action_grey_scale_widget.length == 3 && action_contrash_widget.length > 0) {
      load_active_grey_scale_v3();
    }
  }
}
function callfunction(_0x18b2b1) {
  var _0x404e3c = localStorage.getItem("permismobile");
  if (_0x404e3c != null && _0x404e3c == 'on') {
    setTimeout(() => {
      speachmobile(_0x18b2b1);
    }, 50);
  } else {
    speach(_0x18b2b1);
  }
}
async function speachmobile(_0x4d8952) {
  var _0x2fc403 = localStorage.getItem("permismobile");
  if (_0x2fc403 != null && _0x2fc403 == 'on') {
    console.log("masuk cc");
    if (api_key_google == undefined || api_key_google == '' || api_key_google == null) {
      console.log("masuk woy");
      if (responsiveVoice.voiceSupport()) {
        responsiveVoice.speak(_0x4d8952, "Indonesian Female");
      }
    } else {
      if (api_key_google != undefined && api_key_google != null && api_key_google != '') {
        console.log("masuk");
        const _0x2cdfc3 = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize?key=" + api_key_google, {
          'method': "POST",
          'headers': {
            'Content-Type': "application/json"
          },
          'body': JSON.stringify({
            'input': {
              'text': _0x4d8952
            },
            'voice': {
              'languageCode': "id-ID",
              'name': "id-ID-Wavenet-D",
              'ssmlGender': "FEMALE"
            },
            'audioConfig': {
              'audioEncoding': "MP3"
            }
          })
        });
        const _0x39a2cc = await _0x2cdfc3.json();
        var _0x20d857 = "data:audio/mp3;base64," + _0x39a2cc.audioContent;
        await playAudio(_0x20d857);
      }
    }
  }
}
async function pauseAudio() {
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
}
async function playAudio(_0x1fb7cf) {
  pauseAudio();
  audio = new Audio();
  audio.src = _0x1fb7cf;
  audio.play();
}
function speach(_0x376203) {
  var _0xbfa3d1 = localStorage.getItem("permisvoice");
  if (_0xbfa3d1 != null && _0xbfa3d1 == 'on') {
    var _0x17b14b = window.speechSynthesis;
    _0x17b14b.cancel();
    if ("speechSynthesis" in window) {
      const _0x477935 = new SpeechSynthesisUtterance(_0x376203 || '');
      _0x477935.lang = "id-ID";
      _0x17b14b.getVoices();
      _0x17b14b.speak(_0x477935);
    } else {
      alert("not supported");
    }
  }
}
let r = setInterval(() => {
  if (!speechSynthesis.speaking) {
    clearInterval(r);
  } else {
    speechSynthesis.resume();
  }
}, 1000);
function callfunction(_0x55d9ec) {
  var _0x32828b = localStorage.getItem("permismobile");
  if (_0x32828b != null && _0x32828b == 'on') {
    setTimeout(() => {
      speachmobile(_0x55d9ec);
    }, 50);
  } else {
    speach(_0x55d9ec);
  }
}
function getOS() {
  var _0x5afe4e = window.navigator.userAgent;
  var _0x87884b = window.navigator?.["userAgentData"]?.["platform"] || window.navigator.platform;
  var _0x4861e6 = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  var _0x240fdf = ["Win32", "Win64", "Windows", "WinCE"];
  var _0x45b4bb = ["iPhone", "iPad", "iPod"];
  var _0x5c9fc9 = null;
  if (_0x4861e6.indexOf(_0x87884b) !== -1) {
    _0x5c9fc9 = "Mac OS";
  } else {
    if (_0x45b4bb.indexOf(_0x87884b) !== -1) {
      _0x5c9fc9 = "iOS";
    } else {
      if (_0x240fdf.indexOf(_0x87884b) !== -1) {
        _0x5c9fc9 = "Windows";
      } else {
        if (/Android/.test(_0x5afe4e)) {
          _0x5c9fc9 = "Android";
        } else if (/Linux/.test(_0x87884b)) {
          _0x5c9fc9 = "Linux";
        }
      }
    }
  }
  return _0x5c9fc9;
}
function strip_loading_v2(_0x478f29, _0xa2fb89, _0x3f7390) {
  if (_0x3f7390 == "aktif") {
    $(_0x478f29).show();
    $(_0x478f29 + " > " + _0xa2fb89).removeClass("strip_loading_unprocess_v2");
    $(_0x478f29 + " > " + _0xa2fb89).addClass("strip_loading_process_v2");
  } else {
    $(_0x478f29).hide();
    $(_0x478f29 + " > " + _0xa2fb89).removeClass("strip_loading_process_v2");
    $(_0x478f29 + " > " + _0xa2fb89).addClass("strip_loading_unprocess_v2");
  }
}
function strip_loading_v3(_0x29f114, _0x3e069a, _0x5e2e39) {
  if (_0x5e2e39 == "aktif") {
    $(_0x29f114).show();
    $(_0x29f114 + " > " + _0x3e069a).removeClass("strip_loading_unprocess_v3");
    $(_0x29f114 + " > " + _0x3e069a).addClass("strip_loading_process_v3");
  } else {
    $(_0x29f114).hide();
    $(_0x29f114 + " > " + _0x3e069a).removeClass("strip_loading_process_v3");
    $(_0x29f114 + " > " + _0x3e069a).addClass("strip_loading_unprocess_v3");
  }
}
function strip_loading_v4(_0xd70e35, _0x3c2d46, _0x13bc47) {
  if (_0x13bc47 == "aktif") {
    $(_0xd70e35).show();
    $(_0xd70e35 + " > " + _0x3c2d46).removeClass("strip_loading_unprocess_v4");
    $(_0xd70e35 + " > " + _0x3c2d46).addClass("strip_loading_process_v4");
  } else {
    $(_0xd70e35).hide();
    $(_0xd70e35 + " > " + _0x3c2d46).removeClass("strip_loading_process_v4");
    $(_0xd70e35 + " > " + _0x3c2d46).addClass("strip_loading_unprocess_v4");
  }
}
function load_active_link_all() {
  $("#action_garis_bawahi_tautan").addClass("active_box_menu_disabilitas");
  $("#action_garis_bawahi_tautan .box_icon_disabilitas .icon_fill_svg_color_black").each(function (_0x387272, _0x29de10) {
    var _0x62ae77 = _0x29de10.classList.value;
    if (_0x62ae77.includes("icon_fill_svg_color_black")) {
      _0x29de10.classList = "icon_fill_svg_color_black active_icon_fill_svg_color_black";
    }
  });
  $("#action_garis_bawahi_tautan").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
}
function action_garis_link_1() {
  $("#list_strip_loading_action_garis_bawahi_tautan").show();
  strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_1", "aktif");
  $("#text_garis_bawahi_tautan").text("Garis Bawahi Tautan");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Garis Bawahi Tautan");
    }, 100);
  }
  action_perataan_text_1_2("rata1", "aktif");
  action_perataan_text_1_2("rata2", "noaktif");
  $("#svg_decoration_link").show();
  $("#svg_block_decoration_link").hide();
}
function action_garis_link_2() {
  $("#list_strip_loading_action_garis_bawahi_tautan").show();
  strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_1", "aktif");
  strip_loading_v2("#list_strip_loading_action_garis_bawahi_tautan", "#strip_loading_2", "aktif");
  $("#svg_decoration_link").hide();
  $("#svg_block_decoration_link").show();
  $("#text_garis_bawahi_tautan").text("Sorot Tautan");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Sorot Tautan");
    }, 100);
  }
  action_perataan_text_1_2("rata1", "noaktif");
  action_perataan_text_1_2("rata2", "aktif");
}
function action_gangguna_motorik_process() {
  setTimeout(async () => {
    await load_active_animate_pause();
    await load_active_tooltip_teks_action();
  }, 100);
}
function active_button_link_profile(_0x563a55) {
  var _0x5a4c6a = _0x563a55 - 1;
  var _0xb9eb88 = ["action_gangguan_motorik", "action_netra_total", "action_buta_warna", "action_disleksia", "action_gangguan_pengelihatan", "action_kognitif_pembelajaran", "action_kejang_dan_epilepsi", "action_adhd"];
  var _0x11c7f2 = '#' + _0xb9eb88[_0x5a4c6a];
  $(_0x11c7f2).addClass("active_box_profile_aksesbilitas");
  $(_0x11c7f2 + " *").each(function (_0x4a28a7, _0x28d841) {
    var _0x252a88 = _0x28d841.classList.value;
    if (_0x252a88.includes("color_svg_content_profile_disabilitas")) {
      _0x28d841.classList = "active_color_svg_content_profile_disabilitas";
    }
    if (_0x252a88.includes("fill_icon_dsb")) {
      _0x28d841.classList = "fill_icon_dsb active_fill_icon_dsb";
    }
    if (_0x252a88.includes("text_list_content_profile_disabilitas")) {
      _0x28d841.classList = "text_list_content_profile_disabilitas active_text_list_content_profile_disabilitas";
    }
    if (_0x252a88.includes("icon_list_content_profile_disabilitas")) {
      _0x28d841.classList = "icon_list_content_profile_disabilitas active_icon_list_content_profile_disabilitas";
    }
  });
}
function action_buta_warna_process() {
  var _0x454802 = [1, 1];
  action_grey_scale_widget.length = 0;
  action_grey_scale_widget.push(..._0x454802);
  setTimeout(async () => {
    await load_active_grey_scale_v2();
  }, 100);
}
function action_disleksia_process() {
  var _0x3bd4d7 = [1];
  action_tulisan_dibaca.length = 0;
  action_tulisan_dibaca.push(..._0x3bd4d7);
  setTimeout(async () => {
    await load_active_tulisan_dpt_dibaca();
    await active_action_ramah_dyseleksia();
  }, 100);
}
function action_gangguan_pengelihatan_process() {
  var _0x3d2b5b = [1];
  action_kursor_widget.length = 0;
  action_kursor_widget.push(..._0x3d2b5b);
  var _0x2d27f3 = [1];
  action_text_besar.length = 0;
  action_text_besar.push(..._0x2d27f3);
  var _0x308b92 = [1, 1];
  action_tulisan_dibaca.length = 0;
  action_tulisan_dibaca.push(..._0x308b92);
  var _0x25771f = [1, 1];
  action_grey_scale_widget.length = 0;
  action_grey_scale_widget.push(..._0x25771f);
  setTimeout(async () => {
    await load_active_grey_scale_v2();
    await clear_set_text_kecil();
    await load_active_text_besar();
    await text_besar_1();
    await load_active_tulisan_dpt_dibaca();
    await active_action_tulisan_dapat_dibaca();
    await action_kursor_widget_1();
    await load_active_animate_pause();
    await load_active_tooltip_teks_action();
  }, 100);
}
function action_kognitif_pembelajaran_process() {
  var _0x5993d8 = [1];
  action_text_besar.length = 0;
  action_text_besar.push(..._0x5993d8);
  var _0x1cce15 = [1, 1, 1];
  action_kursor_widget.length = 0;
  action_kursor_widget.push(..._0x1cce15);
  setTimeout(async () => {
    await clear_set_text_kecil();
    await load_active_text_besar();
    await text_besar_1();
    await load_active_animate_pause();
    await load_active_tooltip_teks_action();
    await action_kursor_widget_3();
  }, 100);
}
function action_kejang_dan_epilepsi_process() {
  var _0x4a9af7 = [1];
  action_grey_scale_widget.length = 0;
  action_grey_scale_widget.push(..._0x4a9af7);
  setTimeout(async () => {
    await load_active_grey_scale();
    await load_active_animate_pause();
  }, 100);
}
function action_adhd_process() {
  var _0x50ae34 = [1, 1];
  action_kursor_widget.length = 0;
  action_kursor_widget.push(..._0x50ae34);
  var _0x2539bd = [1];
  action_grey_scale_widget.length = 0;
  action_grey_scale_widget.push(..._0x2539bd);
  setTimeout(async () => {
    await load_active_grey_scale();
    await action_kursor_widget_2();
  }, 400);
}
function action_perataan_text_1_2(_0x2dd5bd, _0x2309bc) {
  if (_0x2dd5bd == "rata1") {
    if (_0x2309bc == "aktif") {
      var _0x15bc67 = document.querySelectorAll("a,div > a,li a, a *,a > h1, a > h2, a > h3, a > h4, a > h5,a > *");
      for (var _0x3e79c5 = 0; _0x3e79c5 < _0x15bc67.length; _0x3e79c5++) {
        if (!(!_0x15bc67[_0x3e79c5].href || /^\s*$/.test(_0x15bc67[_0x3e79c5].href))) {
          var _0x12c75c = $(_0x15bc67[_0x3e79c5]).attr("style");
          if (typeof _0x12c75c !== "undefined" && _0x12c75c !== false) {
            if (action_contrash_widget.length == 2 || action_contrash_widget.length == 3) {
              $(_0x15bc67[_0x3e79c5]).addClass("underline_link_1_kontras");
            } else {
              $(_0x15bc67[_0x3e79c5]).addClass("underline_link_1");
            }
          } else {
            $(_0x15bc67[_0x3e79c5]).addClass("underline_tanda_code");
            $(_0x15bc67[_0x3e79c5]).cssImportant("text-decoration", "underline");
            if (action_contrash_widget.length == 2 || action_contrash_widget.length == 3) {
              $(_0x15bc67[_0x3e79c5]).cssImportant("text-decoration-color", "yellow");
            } else {
              $(_0x15bc67[_0x3e79c5]).cssImportant("text-decoration-color", "black");
            }
          }
        }
      }
    } else {
      $('*').each(function (_0x1e798d, _0x422708) {
        if ($(_0x422708).hasClass("underline_tanda_code")) {
          $(_0x422708).css({
            'text-decoration-color': '',
            'text-decoration': ''
          });
          $(_0x422708).removeClass("underline_tanda_code underline_link_1_kontras underline_link_1 ");
        }
        $(_0x422708).removeClass("underline_link_1_kontras underline_link_1 ");
      });
    }
  } else {
    if (_0x2dd5bd == "rata2") {
      if (_0x2309bc == "aktif") {
        var _0x15bc67 = document.querySelectorAll("a,div > a,li a, a *,a > h1, a > h2, a > h3, a > h4, a > h5,a > *");
        for (var _0x3e79c5 = 0; _0x3e79c5 < _0x15bc67.length; _0x3e79c5++) {
          if (!(!_0x15bc67[_0x3e79c5].href || /^\s*$/.test(_0x15bc67[_0x3e79c5].href))) {
            var _0x12c75c = $(_0x15bc67[_0x3e79c5]).attr("style");
            if (typeof _0x12c75c !== "undefined" && _0x12c75c !== false) {
              $(_0x15bc67[_0x3e79c5]).addClass("underline_link_2");
            } else {
              $(_0x15bc67[_0x3e79c5]).addClass("underline_tanda_code");
              $(_0x15bc67[_0x3e79c5]).cssImportant("text-decoration", "underline");
              $(_0x15bc67[_0x3e79c5]).cssImportant("background-color", "black");
              $(_0x15bc67[_0x3e79c5]).cssImportant("background", "black");
              $(_0x15bc67[_0x3e79c5]).cssImportant("color", "yellow");
              $(_0x15bc67[_0x3e79c5]).cssImportant("text-decoration-color", "yellow");
            }
          }
        }
      } else {
        $('*').each(function (_0x2fda2c, _0x476cea) {
          if ($(_0x476cea).hasClass("underline_tanda_code")) {
            if (action_contrash_widget.length == 2 || action_contrash_widget.length == 3) {
              $(_0x476cea).css({
                'text-decoration-color': '',
                'text-decoration': ''
              });
            } else {
              $(_0x476cea).css({
                'text-decoration-color': '',
                'background-color': '',
                'background': '',
                'text-decoration': '',
                'color': '',
                'text-decoration-color': ''
              });
            }
            $(_0x476cea).removeClass("underline_tanda_code underline_link_2");
          }
          $(_0x476cea).removeClass("underline_link_2 ");
        });
      }
    }
  }
}
function load_active_tulisan_line_height() {
  $("#action_tulisan_line_height").addClass("active_box_menu_disabilitas");
  $("#action_tulisan_line_height .box_icon_disabilitas .icon_svg_color").each(function (_0x4facf3, _0x56f903) {
    var _0x47d500 = _0x56f903.classList.value;
    if (_0x47d500.includes("icon_svg_color")) {
      _0x56f903.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $("#action_tulisan_line_height").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
}
function action_line_height_1() {
  $("#list_strip_loading_action_tulisan_line_height").show();
  strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_1", "aktif");
  $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas,body,html,#slider_dsb_element\")").each(function (_0x222bc5, _0xd6c33d) {
    $(_0xd6c33d).cssImportant("line-height", "1.75em");
  });
  $("#text_id_tinggi_garis").text("Tinggi Garis (1.75X)");
  $("#list_strip_loading_action_tulisan_line_height").show();
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Tinggi Garis (1.75X)");
    }, 100);
  }
}
function action_line_height_2() {
  $("#list_strip_loading_action_tulisan_line_height").show();
  strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_2", "aktif");
  $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas,body,html,#slider_dsb_element\")").each(function (_0x38c37a, _0x20cc2b) {
    $(_0x20cc2b).cssImportant("line-height", "2em");
  });
  $("#text_id_tinggi_garis").text("Tinggi Garis (2X)");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Tinggi Garis (2X)");
    }, 100);
  }
}
function action_line_height_3() {
  $("#list_strip_loading_action_tulisan_line_height").show();
  strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_2", "aktif");
  strip_loading_v3("#list_strip_loading_action_tulisan_line_height", "#strip_loading_3", "aktif");
  $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas,body,html,#slider_dsb_element\")").each(function (_0x133696, _0xfb9cfe) {
    $(_0xfb9cfe).cssImportant("line-height", "2.5em");
  });
  $("#text_id_tinggi_garis").text("Tinggi Garis (2.5X)");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Tinggi Garis (2.5X)");
    }, 100);
  }
}
function load_active_kontras() {
  $("#action_kontras").addClass("active_box_menu_disabilitas");
  $("#action_kontras").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  $("#action_kontras .box_icon_disabilitas path").each(function (_0x475660, _0x973c14) {
    var _0x110e99 = _0x973c14.classList.value;
    if (_0x110e99.includes("circle_multi")) {
      _0x973c14.classList = "circle_multi active_circle_multi";
    }
    if (_0x110e99.includes("circle_single")) {
      _0x973c14.classList = "circle_single active_circle_single";
    }
  });
}
function action_warna_kode_2(_0x884889) {
  if (_0x884889 == "aktif") {
    $("body").removeClass("animsition");
    $(".navbar-inverse2").css("background-color", "rgb(0, 0, 0)");
    $("*:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *,\n        * > a\n        \")").each(function (_0x402a25, _0xfbe491) {
      var _0x1d353b = $(_0xfbe491).attr("style");
      if (typeof _0x1d353b !== "undefined" && _0x1d353b !== false) {
        $(_0xfbe491).addClass("kontras_2_bg_black_green");
      } else {
        $(_0xfbe491).addClass("kontras_2_tanda_code");
        $(_0xfbe491).cssImportant("background-color", "black");
        $(_0xfbe491).cssImportant("color", "#40C090");
        $(_0xfbe491).cssImportant("background", "black");
      }
    });
    $("* > svg *:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n        \")").each(function (_0x35ee4b, _0x2608a2) {
      $(_0x2608a2).cssImportant("color", "#40C090");
    });
    $("* > .border").each(function (_0x23ef3e, _0x4ef40d) {
      $(_0x4ef40d).cssImportant("background-color", '');
      $(_0x4ef40d).cssImportant("background", '');
    });
    $(".close_layout_banner_background").css("opacity", '1');
    $("*:not(\".fa-search,.titletools,svg,.btn-color-mode-switch-inner,.Vue-Toastification__container,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\")").cssImportant("border-color", "white");
    var _0x3a8c22 = document.querySelectorAll("a,div,li a strong");
    for (var _0x34ba6c = 0; _0x34ba6c < _0x3a8c22.length; _0x34ba6c++) {
      if (!(!_0x3a8c22[_0x34ba6c].href || /^\s*$/.test(_0x3a8c22[_0x34ba6c].href))) {
        var _0x2b0cdc = $(_0x3a8c22[_0x34ba6c]).attr("style");
        if (typeof _0x2b0cdc !== "undefined" && _0x2b0cdc !== false) {} else {
          if (!$(_0x3a8c22[_0x34ba6c]).hasClass("kontras_2_tanda_code")) {
            $(_0x3a8c22[_0x34ba6c]).addClass("kontras_2_tanda_code");
          }
          _0x3a8c22[_0x34ba6c].style.color = "#00f3f7 !important";
        }
      }
    }
    $("h1,h2,h3,h4,h5").each(function (_0x3efa3d, _0x12dc37) {
      var _0x209025 = $(_0x12dc37).attr("style");
      if (typeof _0x209025 !== "undefined" && _0x209025 !== false) {
        $(_0x12dc37).addClass("kontras_2_bg_black_green");
      } else {
        $(_0x12dc37).addClass("kontras_2_tanda_code");
        $(_0x12dc37).cssImportant("background-color", "black");
        $(_0x12dc37).cssImportant("color", "#40C090");
        $(_0x12dc37).cssImportant("background", "black");
      }
    });
    $("* > button, * > p").each(function (_0x30dc9b, _0x39dfad) {
      var _0x299bba = $(_0x39dfad).attr("style");
      if (typeof _0x299bba !== "undefined" && _0x299bba !== false) {
        $(_0x39dfad).addClass("kontras_2_bg_black_green");
      } else {
        $(_0x39dfad).addClass("kontras_2_tanda_code");
        $(_0x39dfad).cssImportant("background-color", "black");
        $(_0x39dfad).cssImportant("color", "#40C090");
        $(_0x39dfad).cssImportant("background", "black");
      }
    });
    $("* > a").each(function (_0x2b3377, _0x56f9e3) {
      var _0x22f8ed = $(_0x56f9e3).attr("style");
      if (typeof _0x22f8ed !== "undefined" && _0x22f8ed !== false) {
        $(_0x56f9e3).addClass("kontras_2_bg_black_yellow");
      } else {
        $(_0x56f9e3).addClass("kontras_2_tanda_code");
        $(_0x56f9e3).cssImportant("background-color", "black");
        $(_0x56f9e3).cssImportant("color", "yellow");
        $(_0x56f9e3).cssImportant("background", "black");
      }
    });
    if (action_garis_bawahi_tautan_widget.length > 0) {
      if (action_garis_bawahi_tautan_widget.length == 1) {
        action_perataan_text_1_2("rata1", "aktif");
        action_perataan_text_1_2("rata2", "noaktif");
      }
      if (action_garis_bawahi_tautan_widget.length == 2) {
        action_perataan_text_1_2("rata1", "noaktif");
        action_perataan_text_1_2("rata2", "aktif");
      }
    }
  } else {
    $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x532c34, _0x5f1796) {
      if ($(_0x5f1796).hasClass("kontras_2_tanda_code")) {
        $(_0x5f1796).css({
          'background-color': '',
          'background': '',
          'color': '',
          'opacity': ''
        });
        $(_0x5f1796).removeClass("kontras_2_tanda_code");
      }
      $(_0x5f1796).removeClass("kontras_2_bg_black_yellow kontras_2_bg_black_green kontras_2_bg_href");
    });
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x390ea1, _0x1c6ddd) {
      $(_0x1c6ddd).css({
        'opacity': ''
      });
    });
    $("*:not(\".fa-search,.titletools,svg,.btn-color-mode-switch-inner,.Vue-Toastification__container\")").cssImportant("border-color", '');
    $("* > svg *").each(function (_0x1f60a2, _0x583e77) {
      $(_0x583e77).css({
        'color': ''
      });
    });
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x42ab3a, _0x30c919) {
      var _0x375a16 = $(_0x30c919)[0].style['0'];
      if (_0x375a16 == undefined || _0x375a16 == null || _0x375a16 == '') {
        $(_0x30c919).removeAttr("style");
      }
    });
  }
}
function action_warna_kode_3(_0x259134) {
  if (_0x259134 == "aktif") {
    $("body").removeClass("animsition");
    $(".navbar-inverse2").css("background-color", "rgb(0, 0, 0)");
    $("*:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n        \")").each(function (_0x762e45, _0x3c8e1f) {
      var _0x4833a8 = $(_0x3c8e1f).attr("style");
      if (typeof _0x4833a8 !== "undefined" && _0x4833a8 !== false) {
        $(_0x3c8e1f).addClass("kontras_3_bg_black_yellow");
      } else {
        $(_0x3c8e1f).addClass("kontras_3_tanda_code");
        $(_0x3c8e1f).cssImportant("background-color", "black");
        $(_0x3c8e1f).cssImportant("color", "yellow");
        $(_0x3c8e1f).cssImportant("background", "black");
      }
    });
    $("* > svg *:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n        \")").each(function (_0x5411fb, _0x1db8c0) {
      $(_0x1db8c0).cssImportant("color", "yellow");
    });
    $(".close_layout_banner_background").css("opacity", '1');
    $("*:not(\".fa-search,.titletools,svg,.btn-color-mode-switch-inner,.columncopyright,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\")").cssImportant("border-color", "white");
    if (action_garis_bawahi_tautan_widget.length > 0) {
      if (action_garis_bawahi_tautan_widget.length == 1) {
        action_perataan_text_1_2("rata1", "aktif");
        action_perataan_text_1_2("rata2", "noaktif");
      }
      if (action_garis_bawahi_tautan_widget.length == 2) {
        action_perataan_text_1_2("rata1", "noaktif");
        action_perataan_text_1_2("rata2", "aktif");
      }
    }
  } else {
    $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x103b5d, _0x34bf9f) {
      if ($(_0x34bf9f).hasClass("kontras_3_tanda_code")) {
        $(_0x34bf9f).css({
          'background-color': '',
          'background': '',
          'color': '',
          'opacity': ''
        });
        $(_0x34bf9f).removeClass("kontras_3_tanda_code");
      }
      $(_0x34bf9f).removeClass("kontras_3_bg_black_yellow");
    });
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x52ef4d, _0xd09216) {
      var _0x180e7a = $(_0xd09216)[0].style['0'];
      if (_0x180e7a == undefined || _0x180e7a == null || _0x180e7a == '') {
        $(_0xd09216).removeAttr("style");
      }
    });
    $("*:not(\".fa-search,.titletools,svg,.btn-color-mode-switch-inner,.Vue-Toastification__container\")").cssImportant("border-color", '');
    $("* > svg *").each(function (_0x18ce0d, _0x32e9e8) {
      $(_0x32e9e8).css({
        'color': ''
      });
    });
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x531702, _0x1969ab) {
      $(_0x1969ab).css({
        'opacity': ''
      });
    });
  }
}
function action_warna_kode_4(_0x45029c) {
  if (_0x45029c == "aktif") {
    $("body").removeClass("animsition");
    $("*:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n        \")").each(function (_0xcdc265, _0x4415aa) {
      var _0x146a4d = $(_0x4415aa).attr("style");
      if (typeof _0x146a4d !== "undefined" && _0x146a4d !== false) {
        $(_0x4415aa).addClass("kontras_4_bg_black_white");
      } else {
        $(_0x4415aa).addClass("kontras_4_tanda_code");
        $(_0x4415aa).cssImportant("color", "black");
        $(_0x4415aa).cssImportant("background-color", "white");
        $(_0x4415aa).cssImportant("background", "white");
      }
    });
    $("* > svg *:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n        \")").each(function (_0x43adfa, _0x1807dd) {
      $(_0x1807dd).cssImportant("color", "black");
    });
    $("* > svg:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n      .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n      \")").each(function (_0x3815e4, _0x3014e0) {
      $(_0x3014e0).cssImportant("color", "black");
      $(_0x3014e0).css({
        'background-color': '',
        'background': ''
      });
    });
    if (action_garis_bawahi_tautan_widget.length > 0) {
      if (action_garis_bawahi_tautan_widget.length == 1) {
        action_perataan_text_1_2("rata1", "aktif");
        action_perataan_text_1_2("rata2", "noaktif");
      }
      if (action_garis_bawahi_tautan_widget.length == 2) {
        action_perataan_text_1_2("rata1", "noaktif");
        action_perataan_text_1_2("rata2", "aktif");
      }
    }
  } else {
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x35deda, _0x4468eb) {
      if ($(_0x4468eb).hasClass("kontras_4_tanda_code")) {
        $(_0x4468eb).css({
          'background-color': '',
          'background': '',
          'color': '',
          'opacity': ''
        });
        $(_0x4468eb).removeClass("kontras_4_tanda_code");
      }
      $(_0x4468eb).removeClass("kontras_4_bg_black_white");
    });
    $("*:not(\".fa-search,.titletools,svg,.btn-color-mode-switch-inner,.Vue-Toastification__container\")").cssImportant("border-color", '');
    $("* > svg *:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n        .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n        \")").each(function (_0x2ec111, _0x2c5a96) {
      $(_0x2c5a96).css({
        'color': ''
      });
    });
    $("* > svg:not(\".btn-color-mode-switch-inner,.mycheckbox,.Vue-Toastification__container,.slider-navigation,.box_data_permohonan,.columncopyright,.slick-next,.slick-prev,.form_all_daftar_menu_permohonan,\n      .container_menu_all > .grouprow,.container_menu_all > .stylecolumnsosmed,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.row_column_creator *\n      \")").each(function (_0x36adb3, _0x3ab57b) {
      $(_0x3ab57b).css({
        'color': '',
        'background-color': '',
        'background': ''
      });
    });
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x572fbe, _0x13ec1e) {
      $(_0x13ec1e).css({
        'opacity': ''
      });
    });
    $("*:not('#widget_menu_disabilitas *')").each(function (_0x154a2e, _0x14f754) {
      var _0x12dbb5 = $(_0x14f754)[0].style['0'];
      if (_0x12dbb5 == undefined || _0x12dbb5 == null || _0x12dbb5 == '') {
        $(_0x14f754).removeAttr("style");
      }
    });
  }
}
function action_warna_kode_1(_0x505a5f) {
  if (_0x505a5f == "aktif") {
    $("html").css({
      'filter': "invert(100%)"
    });
  } else {
    $("html").css({
      'filter': ''
    });
  }
}
function load_active_tulisan_dpt_dibaca() {
  $("#action_tulisan_dapat_di_baca").addClass("active_box_menu_disabilitas");
  $("#action_tulisan_dapat_di_baca .box_icon_disabilitas .icon_svg_color").each(function (_0x18d468, _0x242012) {
    var _0x101f72 = _0x242012.classList.value;
    if (_0x101f72.includes("icon_svg_color")) {
      _0x242012.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $("#action_tulisan_dapat_di_baca").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
}
function active_action_ramah_dyseleksia() {
  $("#svg_font_di_perbesar").hide();
  $("#svg_dy_seleksia").show();
  $("#list_strip_loading_action_tulisan_dapat_dibaca").show();
  strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_1", "aktif");
  $("*:not(\"i *,i, .stylecolumnsosmed,.stylecolumnsosmed *,.fa-search,.toolbar-disabilitas  *,.fa,.fa-angle-down,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.class_utama_dropdown .fa-chevron-down\")").each(function (_0x34a5f4, _0x30c686) {
    $(_0x30c686).cssImportant("font-family", "OpenDyslexic Bold");
  });
}
function active_action_tulisan_dapat_dibaca() {
  $('*').css({
    'font-family': ''
  });
  $("#svg_dy_seleksia").hide();
  $("#svg_font_di_perbesar").show();
  $("#text_tulisan_dapat_di_baca").text("Tulisan Dapat Di Baca");
  strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_1", "aktif");
  strip_loading_v2("#list_strip_loading_action_tulisan_dapat_dibaca", "#strip_loading_2", "aktif");
  $("#action_tulisan_dapat_di_baca").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  $("*:not(\"i *,i, .stylecolumnsosmed,.stylecolumnsosmed *,.fa-search,.toolbar-disabilitas  *,.fa,.fa-angle-down,#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,.class_utama_dropdown .fa-chevron-down\")").each(function (_0x3d9e8f, _0x2464d0) {
    $(_0x2464d0).cssImportant("font-family", "Arial Serif");
  });
}
function no_active_action_tulisan_dapat_dibaca() {
  $('*').css({
    'font-family': '',
    'font-size': ''
  });
  $('*').each(function (_0x28743d, _0x243034) {
    $(_0x243034).cssImportant("font-family", '');
    $(_0x243034).cssImportant("font-size", '');
  });
}
function load_active_space_text() {
  $("#action_space_text").addClass("active_box_menu_disabilitas");
  $("#action_space_text .box_icon_disabilitas .icon_svg_color").each(function (_0x148aaa, _0x34e1b0) {
    var _0x1f879e = _0x34e1b0.classList.value;
    if (_0x1f879e.includes("icon_svg_color")) {
      _0x34e1b0.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $("#action_space_text").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
}
function action_space_text_1() {
  $("#list_strip_loading_action_space_text").show();
  strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_1", "aktif");
  $("#id_space_text").text("Spasi Ringan");
  $("div > *:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas\")").css({
    'letter-spacing': "1px"
  });
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Spasi Ringan");
    }, 100);
  }
}
function action_space_text_2() {
  $("#list_strip_loading_action_space_text").show();
  strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_2", "aktif");
  $("#id_space_text").text("Spasi Sedang");
  $("div > *:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas\")").css({
    'letter-spacing': "4px"
  });
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Spasi Sedang");
    }, 100);
  }
}
function action_space_text_3() {
  $("#list_strip_loading_action_space_text").show();
  strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_2", "aktif");
  strip_loading_v3("#list_strip_loading_action_space_text", "#strip_loading_3", "aktif");
  $("#id_space_text").text("Spasi Besar");
  $("div > *:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#widget_menu_disabilitas\")").css({
    'letter-spacing': "7px"
  });
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Spasi Besar");
    }, 100);
  }
}
function load_active_perataan_text() {
  $("#action_perataan_text").addClass("active_box_menu_disabilitas");
  $("#action_perataan_text .box_icon_disabilitas .icon_svg_sroke_color").each(function (_0x155f7d, _0x4ed1ff) {
    var _0x279cf8 = _0x4ed1ff.classList.value;
    if (_0x279cf8.includes("icon_svg_sroke_color")) {
      _0x4ed1ff.classList = "icon_svg_sroke_color active_icon_svg_sroke_color";
    }
  });
}
function action_perataan_text_1() {
  $("#list_strip_loading_perataan_text").show();
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_1", "aktif");
  $("#text_rata_tulisan").text("Rata Kiri");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Rata Kiri");
    }, 100);
  }
  $("#svg_left_text_icon").show();
  $("#svg_center_text_icon,#svg_right_text_icon,#svg_right_left_text_icon").hide();
  $("#list_strip_loading_perataan_text").show();
  perataan_all_text("kiri", "aktif");
}
function action_perataan_text_2() {
  $("#list_strip_loading_perataan_text").show();
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_2", "aktif");
  $("#text_rata_tulisan").text("Rata Tengah");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Rata Tengah");
    }, 100);
  }
  $("#svg_center_text_icon").show();
  $("#svg_left_text_icon,#svg_right_text_icon,#svg_right_left_text_icon").hide();
  perataan_all_text("kiri", "noaktif");
  perataan_all_text("tengah", "aktif");
}
function action_perataan_text_3() {
  $("#list_strip_loading_perataan_text").show();
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_3", "aktif");
  $("#text_rata_tulisan").text("Rata Kanan");
  $("#svg_right_text_icon").show();
  $("#svg_left_text_icon,#svg_center_text_icon,#svg_right_left_text_icon").hide();
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Rata Kanan");
    }, 100);
  }
  perataan_all_text("kiri", "noaktif");
  perataan_all_text("tengah", "noaktif");
  perataan_all_text("kanan", "aktif");
}
function action_perataan_text_4() {
  $("#list_strip_loading_perataan_text").show();
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_3", "aktif");
  strip_loading_v4("#list_strip_loading_perataan_text", "#strip_loading_4", "aktif");
  $("#text_rata_tulisan").text("Rata Kanan - Kiri");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Rata Kanan dan Kiri");
    }, 100);
  }
  perataan_all_text("kiri", "noaktif");
  perataan_all_text("tengah", "noaktif");
  perataan_all_text("kanan", "noaktif");
  perataan_all_text("kanan-kiri", "aktif");
  $("#svg_right_left_text_icon").show();
  $("#svg_left_text_icon,#svg_center_text_icon,#svg_right_text_icon").hide();
}
function perataan_all_text(_0x32a5d2, _0x298ab9) {
  if (_0x32a5d2 == "kiri") {
    if (_0x298ab9 == "aktif") {
      $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#slider_dsb_element,#slider_dsb_element *\")").each(function (_0x5d0105, _0x41038d) {
        var _0x4141db = $(_0x41038d).attr("style");
        if (typeof _0x4141db !== "undefined" && _0x4141db !== false) {
          $(_0x41038d).addClass("rata_text_kiri_widget");
          if ($(_0x41038d).css("flex-direction") == "row") {
            $(_0x41038d).addClass("rata_column_kiri_widget");
          }
        } else {
          $(_0x41038d).addClass("perataan_tanda_code");
          $(_0x41038d).cssImportant("text-align", "left");
          if ($(_0x41038d).css("flex-direction") == "row") {
            $(_0x41038d).cssImportant("justify-content", "flex-start");
          }
        }
      });
    } else {
      $('*').each(function (_0x5e6526, _0x19bd0d) {
        if ($(_0x19bd0d).hasClass("perataan_tanda_code")) {
          $(_0x19bd0d).css({
            'text-align': '',
            'justify-content': ''
          });
          $(_0x19bd0d).removeClass("perataan_tanda_code");
        } else {
          $(_0x19bd0d).removeClass("rata_text_kiri_widget rata_column_kiri_widget");
        }
      });
    }
  } else {
    if (_0x32a5d2 == "tengah") {
      if (_0x298ab9 == "aktif") {
        $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#slider_dsb_element,#slider_dsb_element *\")").each(function (_0x5c71f9, _0x3f4e4c) {
          var _0x458d00 = $(_0x3f4e4c).attr("style");
          if (typeof _0x458d00 !== "undefined" && _0x458d00 !== false) {
            $(_0x3f4e4c).addClass("rata_text_tengah_widget");
            if ($(_0x3f4e4c).css("flex-direction") == "row") {
              $(_0x3f4e4c).addClass("rata_column_tengah_widget");
            }
          } else {
            $(_0x3f4e4c).addClass("perataan_tanda_code");
            $(_0x3f4e4c).cssImportant("text-align", "center");
            if ($(_0x3f4e4c).css("flex-direction") == "row") {
              $(_0x3f4e4c).cssImportant("justify-content", "center");
            }
          }
        });
      } else {
        $('*').each(function (_0x4d58ec, _0x348f29) {
          if ($(_0x348f29).hasClass("perataan_tanda_code")) {
            $(_0x348f29).css({
              'text-align': '',
              'justify-content': ''
            });
            $(_0x348f29).removeClass("perataan_tanda_code");
          } else {
            $(_0x348f29).removeClass("rata_text_tengah_widget rata_column_tengah_widget");
          }
        });
      }
    } else {
      if (_0x32a5d2 == "kanan") {
        if (_0x298ab9 == "aktif") {
          $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#slider_dsb_element,#slider_dsb_element *\")").each(function (_0x58a6bc, _0x5e7522) {
            var _0x30a046 = $(_0x5e7522).attr("style");
            if (typeof _0x30a046 !== "undefined" && _0x30a046 !== false) {
              $(_0x5e7522).addClass("rata_text_kanan_widget");
              if ($(_0x5e7522).css("flex-direction") == "row") {
                $(_0x5e7522).addClass("rata_column_kanan_widget");
              }
            } else {
              $(_0x5e7522).addClass("perataan_tanda_code");
              $(_0x5e7522).cssImportant("text-align", "right");
              if ($(_0x5e7522).css("flex-direction") == "row") {
                $(_0x5e7522).cssImportant("justify-content", "flex-end");
              }
            }
          });
        } else {
          $('*').each(function (_0x254604, _0xe77b0c) {
            if ($(_0xe77b0c).hasClass("perataan_tanda_code")) {
              $(_0xe77b0c).css({
                'text-align': '',
                'justify-content': ''
              });
              $(_0xe77b0c).removeClass("perataan_tanda_code");
            } else {
              $(_0xe77b0c).removeClass("rata_text_kanan_widget rata_column_kanan_widget");
            }
          });
        }
      } else if (_0x32a5d2 == "kanan-kiri") {
        if (_0x298ab9 == "aktif") {
          $("*:not(\"#widget_menu_disabilitas *,.circle_aksesbilitas_popup *,#slider_dsb_element,#slider_dsb_element *\")").each(function (_0x3983f3, _0x518714) {
            var _0x2172cd = $(_0x518714).attr("style");
            if (typeof _0x2172cd !== "undefined" && _0x2172cd !== false) {
              if ($(_0x518714).css("flex-direction") == "row") {
                $(_0x518714).addClass("rata_column_kanan_kiri_text_widget");
              }
            } else {
              $(_0x518714).addClass("perataan_tanda_code");
              $(_0x518714).cssImportant("text-align", "justify");
              $(_0x518714).cssImportant("text-justify", "inter-word");
              $(_0x518714).cssImportant("justify-content", '');
            }
          });
        } else {
          $('*').each(function (_0x182e1c, _0x22a178) {
            if ($(_0x22a178).hasClass("perataan_tanda_code")) {
              $(_0x22a178).css({
                'text-align': '',
                'justify-content': '',
                'text-justify': ''
              });
              $(_0x22a178).removeClass("perataan_tanda_code");
            } else {
              $(_0x22a178).removeClass("rata_column_kanan_kiri_text_widget");
            }
          });
        }
      }
    }
  }
}
function action_kontras_1() {
  action_warna_kode_1("aktif");
  $("#list_strip_loading_action_kontras").show();
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_1", "aktif");
  $("#svg_kontras_multi,#svg_kontras_klise,#svg_kontras_warna,#svg_kontras_light").hide();
  $("#svg_balikan_warna").show();
  $("#text_name_kontras").text("Balikan Warna");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Balikan Warna");
    }, 100);
  }
}
function action_kontras_2() {
  action_warna_kode_1("noaktif");
  action_warna_kode_2("aktif");
  $("#list_strip_loading_action_kontras").show();
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_2", "aktif");
  $("#svg_kontras_multi,#svg_kontras_klise,#svg_kontras_light,#svg_balikan_warna").hide();
  $("#svg_kontras_warna").show();
  $("#text_name_kontras").text("Kontras Tinggi");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Kontras Tinggi");
    }, 100);
  }
  cek_grey_scale_active_no_active();
}
function action_kontras_3() {
  action_warna_kode_1("noaktif");
  action_warna_kode_2("noaktif");
  action_warna_kode_3("aktif");
  $("#list_strip_loading_action_kontras").show();
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_3", "aktif");
  $("#svg_kontras_multi,#svg_kontras_klise,#svg_kontras_light,#svg_kontras_warna,#svg_balikan_warna").hide();
  $("#svg_kontras_klise").show();
  $("#text_name_kontras").text("Latar Gelap");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Latar Gelap");
    }, 100);
  }
  cek_grey_scale_active_no_active();
}
function action_kontras_4() {
  action_warna_kode_1("noaktif");
  action_warna_kode_2("noaktif");
  action_warna_kode_3("noaktif");
  action_warna_kode_4("aktif");
  $("#list_strip_loading_action_kontras").show();
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_3", "aktif");
  strip_loading_v4("#list_strip_loading_action_kontras", "#strip_loading_4", "aktif");
  $("#svg_kontras_multi,#svg_kontras_klise,#svg_kontras_klise,#svg_kontras_warna,#svg_balikan_warna").hide();
  $("#svg_kontras_light").show();
  $("#text_name_kontras").text("Latar Terang");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Latar Terang");
    }, 100);
  }
  cek_grey_scale_active_no_active();
}
function clear_set_text_kecil() {
  action_text_kecil.length = 0;
  $("#action_perkecil_text").removeClass("active_box_menu_disabilitas");
  $("#action_perkecil_text .box_icon_disabilitas .icon_svg_color").each(function (_0x10de43, _0x39dfee) {
    var _0x8020d3 = _0x39dfee.classList.value;
    if (_0x8020d3.includes("active_icon_svg_color")) {
      _0x39dfee.classList = "icon_svg_color";
    }
  });
  $("#action_perkecil_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_1", "noaktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_2", "noaktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_3", "noaktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_4", "noaktif");
  $("*:not(\"#widget_menu_disabilitas *\")").css({
    'font-size': ''
  });
  localStorage.removeItem("text_kecil");
}
function load_active_hidden_image() {
  $("#action_hidden_image").addClass("active_box_menu_disabilitas");
  $("#action_hidden_image .box_icon_disabilitas .icon_svg_color").each(function (_0x31752f, _0x319fe3) {
    var _0x167989 = _0x319fe3.classList.value;
    if (_0x167989.includes("icon_svg_color")) {
      _0x319fe3.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $("#action_hidden_image").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  $("* > img:not(\"#widget_menu_disabilitas *\")").each(function (_0x4219c8, _0x25ecba) {
    $(_0x25ecba).cssImportant("visibility", "hidden");
  });
}
function action_kursor_widget_1() {
  $("#list_strip_loading_action_kursor").show();
  $("#svg_kursor_web").show();
  $("#svg_kursor_masker").hide();
  $("#svg_kursor_masker_v2").hide();
  $("#text_id_kursor").text("Kursor");
  strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_1", "aktif");
  $("#action_kursor").addClass("active_box_menu_disabilitas");
  $("#action_kursor .box_icon_disabilitas .icon_svg_color").each(function (_0x1c4fdf, _0x59e77c) {
    var _0x3ba672 = _0x59e77c.classList.value;
    if (_0x3ba672.includes("icon_svg_color")) {
      _0x59e77c.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $("#action_kursor").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  setTimeout(() => {
    data_move_mouse();
    $("*:not('.radio_row_widget *')").addClass("cursor_website_all");
  }, 100);
}
function action_kursor_widget_2() {
  $("#svg_kursor_web").hide();
  $("#svg_kursor_masker").show();
  $("#svg_kursor_masker_v2").hide();
  $("#text_id_kursor").text("Masker Bacaan");
  $("#list_strip_loading_action_kursor").show();
  strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_2", "aktif");
  $("#action_kursor").addClass("active_box_menu_disabilitas");
  $("#action_kursor .box_icon_disabilitas .icon_svg_color").each(function (_0x4f949d, _0x10d326) {
    var _0x5ca599 = _0x10d326.classList.value;
    if (_0x5ca599.includes("icon_svg_color")) {
      _0x10d326.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $('*').removeClass("cursor_website_all");
  $("#action_kursor").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  setTimeout(() => {
    data_move_mouse();
  }, 100);
}
function action_kursor_widget_3() {
  $("#svg_kursor_web").hide();
  $("#svg_kursor_masker").hide();
  $("#svg_kursor_masker_v2").show();
  $("#text_id_kursor").text("Baca Panduan");
  $("#list_strip_loading_action_kursor").show();
  strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_2", "aktif");
  strip_loading_v3("#list_strip_loading_action_kursor", "#strip_loading_3", "aktif");
  $("#action_kursor").addClass("active_box_menu_disabilitas");
  $("#action_kursor .box_icon_disabilitas .icon_svg_color").each(function (_0x98f6c5, _0x3c87c2) {
    var _0x5d5aa4 = _0x3c87c2.classList.value;
    if (_0x5d5aa4.includes("icon_svg_color")) {
      _0x3c87c2.classList = "icon_svg_color active_icon_svg_color";
    }
  });
  $('*').removeClass("cursor_website_all");
  $("#action_kursor").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  setTimeout(() => {
    data_move_mouse();
  }, 100);
}
function load_active_animate_pause() {
  $("#action_animate_pause").addClass("active_box_menu_disabilitas");
  $("#action_animate_pause .box_icon_disabilitas svg *").each(function (_0x9905f1, _0x4cdfa4) {
    var _0x142471 = _0x4cdfa4.classList.value;
    if (_0x142471.includes("icon_svg_color")) {
      _0x4cdfa4.classList = "active_icon_svg_color";
    }
    if (_0x142471.includes("icon_svg_sroke_color")) {
      _0x4cdfa4.classList = "active_icon_svg_sroke_color";
    }
  });
  interval_animate_widget = setInterval(cek_animate_new_widget, 10);
  $("#text_id_animasi").text("Animasi Di Jalankan");
  $("#svg_animasi_play").show();
  $("#svg_animasi_pause").hide();
  $("#action_animate_pause").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  if (cek_action_sound_search.length > 0) {
    setTimeout(() => {
      callfunction("Animasi Di Jalankan");
    }, 100);
  }
}
function load_active_tooltip_teks_action() {
  $("#action_tooltip").addClass("active_box_menu_disabilitas");
  $("#action_tooltip").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  $("#action_tooltip .box_icon_disabilitas .icon_svg_color").each(function (_0x93a961, _0x3fbd3f) {
    var _0x45ef93 = _0x3fbd3f.classList.value;
    if (_0x45ef93.includes("icon_svg_color")) {
      _0x3fbd3f.classList = "icon_svg_color active_icon_svg_color";
    }
  });
}
function load_active_grey_scale_v2() {
  $("#text_tulisan_grey_scale").text("Saturasi Tinggi");
  $("#action_grey_scale").addClass("active_box_menu_disabilitas");
  $("#action_grey_scale .box_icon_disabilitas path").each(function (_0x572d68, _0x25c53c) {
    var _0x3c7335 = _0x25c53c.classList.value;
    if (_0x3c7335.includes("icon_svg_grey_scale_color_1")) {
      _0x25c53c.classList = "icon_svg_grey_scale_color_1 active_icon_svg_grey_scale_color_1";
    }
    if (_0x3c7335.includes("icon_svg_grey_scale_color_2")) {
      _0x25c53c.classList = "icon_svg_grey_scale_color_2 active_icon_svg_grey_scale_color_2";
    }
    if (_0x3c7335.includes("icon_svg_grey_scale_color_3")) {
      _0x25c53c.classList = "icon_svg_grey_scale_color_3 active_icon_svg_grey_scale_color_3";
    }
    if (_0x3c7335.includes("icon_svg_grey_scale_color_4")) {
      _0x25c53c.classList = "icon_svg_grey_scale_color_4 active_icon_svg_grey_scale_color_4";
    }
  });
  $("#action_grey_scale").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_2", "aktif");
  if (action_contrash_widget.length == 1 && action_grey_scale_widget.length == 0) {
    action_warna_kode_1("aktif");
  }
  $("html").css({
    'filter': "saturate(3)"
  });
}
function load_active_grey_scale_v3() {
  $("#text_tulisan_grey_scale").text("Desaturasi");
  $("#action_grey_scale").addClass("active_box_menu_disabilitas");
  $("#action_grey_scale .box_icon_disabilitas path").each(function (_0x3f2678, _0x266221) {
    var _0x1661c3 = _0x266221.classList.value;
    if (_0x1661c3.includes("icon_svg_grey_scale_color_1")) {
      _0x266221.classList = "icon_svg_grey_scale_color_1 active_icon_svg_grey_scale_color_1";
    }
    if (_0x1661c3.includes("icon_svg_grey_scale_color_2")) {
      _0x266221.classList = "icon_svg_grey_scale_color_2 active_icon_svg_grey_scale_color_2";
    }
    if (_0x1661c3.includes("icon_svg_grey_scale_color_3")) {
      _0x266221.classList = "icon_svg_grey_scale_color_3 active_icon_svg_grey_scale_color_3";
    }
    if (_0x1661c3.includes("icon_svg_grey_scale_color_4")) {
      _0x266221.classList = "icon_svg_grey_scale_color_4 active_icon_svg_grey_scale_color_4";
    }
  });
  $("#action_grey_scale").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_1", "aktif");
  strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_2", "aktif");
  strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_3", "aktif");
  if (action_contrash_widget.length == 1 && action_grey_scale_widget.length == 0) {
    action_warna_kode_1("aktif");
  }
  $("html").css({
    'filter': "grayscale(100%)"
  });
}
function load_active_grey_scale() {
  $("#text_tulisan_grey_scale").text("Saturasi Rendah");
  $("#action_grey_scale").addClass("active_box_menu_disabilitas");
  $("#action_grey_scale .box_icon_disabilitas path").each(function (_0x570e5c, _0x29cbd9) {
    var _0x2d2461 = _0x29cbd9.classList.value;
    if (_0x2d2461.includes("icon_svg_grey_scale_color_1")) {
      _0x29cbd9.classList = "icon_svg_grey_scale_color_1 active_icon_svg_grey_scale_color_1";
    }
    if (_0x2d2461.includes("icon_svg_grey_scale_color_2")) {
      _0x29cbd9.classList = "icon_svg_grey_scale_color_2 active_icon_svg_grey_scale_color_2";
    }
    if (_0x2d2461.includes("icon_svg_grey_scale_color_3")) {
      _0x29cbd9.classList = "icon_svg_grey_scale_color_3 active_icon_svg_grey_scale_color_3";
    }
    if (_0x2d2461.includes("icon_svg_grey_scale_color_4")) {
      _0x29cbd9.classList = "icon_svg_grey_scale_color_4 active_icon_svg_grey_scale_color_4";
    }
  });
  $("#action_grey_scale").find(".box_text_bottom_disabilitas").addClass("active_box_text_bottom_disabilitas");
  $("#list_strip_loading_action_grey_scale").show();
  strip_loading_v3("#list_strip_loading_action_grey_scale", "#strip_loading_1", "aktif");
  if (action_contrash_widget.length == 1 && action_grey_scale_widget.length == 0) {
    action_warna_kode_1("aktif");
  }
  $("html").css({
    'filter': "saturate(0.5)"
  });
}
function load_active_text_kecil() {
  $("#action_perkecil_text").addClass("active_box_menu_disabilitas");
  $("#action_perkecil_text .box_icon_disabilitas .icon_svg_color").each(function (_0x4b6d6e, _0x23ac74) {
    var _0x1a3f99 = _0x23ac74.classList.value;
    if (_0x1a3f99.includes("icon_svg_color")) {
      _0x23ac74.classList = "icon_svg_color active_icon_svg_color";
    }
  });
}
function text_kecil_1() {
  $("#list_strip_loading_perkecil_text").show();
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_1", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x2260b6, _0x54c046) {
    $(_0x54c046).css("font-size", '');
    var _0x3f1343 = $(_0x54c046).css("font-size");
    var _0x3a1bd7 = parseInt(_0x3f1343) - 2;
    var _0x583a6a = _0x3f1343;
    if (!(!_0x583a6a || /^\s*$/.test(_0x583a6a)) && _0x583a6a != undefined && _0x583a6a != '') {
      if (_0x3a1bd7 >= 4) {
        _0x583a6a = _0x3a1bd7 + 'px';
      } else {
        _0x583a6a = "5px";
      }
    } else {
      _0x583a6a = "15px";
    }
    $(_0x54c046).cssImportant("font-size", _0x583a6a);
  });
}
function text_kecil_2() {
  $("#list_strip_loading_perkecil_text").show();
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_2", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x41d715, _0x19b238) {
    $(_0x19b238).css("font-size", '');
    var _0x5aa3fd = $(_0x19b238).css("font-size");
    var _0x3c7aea = parseInt(_0x5aa3fd) - 4;
    var _0x2905b4 = _0x5aa3fd;
    if (!(!_0x2905b4 || /^\s*$/.test(_0x2905b4)) && _0x2905b4 != undefined && _0x2905b4 != '') {
      if (_0x3c7aea >= 4) {
        _0x2905b4 = _0x3c7aea + 'px';
      } else {
        _0x2905b4 = "5px";
      }
    } else {
      _0x2905b4 = "13px";
    }
    $(_0x19b238).cssImportant("font-size", _0x2905b4);
  });
}
function text_kecil_3() {
  $("#list_strip_loading_perkecil_text").show();
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_3", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x3b739f, _0x975287) {
    $(_0x975287).css("font-size", '');
    var _0x1eb78d = $(_0x975287).css("font-size");
    var _0x50b77b = parseInt(_0x1eb78d) - 6;
    var _0x4188a5 = _0x1eb78d;
    if (!(!_0x4188a5 || /^\s*$/.test(_0x4188a5)) && _0x4188a5 != undefined && _0x4188a5 != '') {
      if (_0x50b77b >= 4) {
        _0x4188a5 = _0x50b77b + 'px';
      } else {
        _0x4188a5 = "5px";
      }
    } else {
      _0x4188a5 = "11px";
    }
    $(_0x975287).cssImportant("font-size", _0x4188a5);
  });
}
function text_kecil_4() {
  $("#list_strip_loading_perkecil_text").show();
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_3", "aktif");
  strip_loading_v4("#list_strip_loading_perkecil_text", "#strip_loading_4", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x232c7c, _0x2cd8ce) {
    $(_0x2cd8ce).css("font-size", '');
    var _0x5a4a31 = $(_0x2cd8ce).css("font-size");
    var _0x5ac176 = parseInt(_0x5a4a31) - 8;
    var _0x4a1021 = _0x5a4a31;
    if (!(!_0x4a1021 || /^\s*$/.test(_0x4a1021)) && _0x4a1021 != undefined && _0x4a1021 != '') {
      if (_0x5ac176 >= 4) {
        _0x4a1021 = _0x5ac176 + 'px';
      } else {
        _0x4a1021 = "5px";
      }
    } else {
      _0x4a1021 = "9px";
    }
    $(_0x2cd8ce).cssImportant("font-size", _0x4a1021);
  });
}
function clear_set_text_besar() {
  action_text_besar.length = 0;
  localStorage.removeItem("text_besar");
  $("#action_perbesar_text").removeClass("active_box_menu_disabilitas");
  $("#action_perbesar_text .box_icon_disabilitas .icon_svg_color").each(function (_0x2faa40, _0x147104) {
    var _0x2e5f61 = _0x147104.classList.value;
    if (_0x2e5f61.includes("active_icon_svg_color")) {
      _0x147104.classList = "icon_svg_color";
    }
  });
  $("#action_perbesar_text").find(".box_text_bottom_disabilitas").removeClass("active_box_text_bottom_disabilitas");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_1", "noaktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_2", "noaktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_3", "noaktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_4", "noaktif");
  $("*:not(\"#widget_menu_disabilitas *\")").css({
    'font-size': ''
  });
}
function load_active_text_besar() {
  $("#action_perbesar_text").addClass("active_box_menu_disabilitas");
  $("#action_perbesar_text .box_icon_disabilitas .icon_svg_color").each(function (_0x200c74, _0x317a62) {
    var _0x29e1b3 = _0x317a62.classList.value;
    if (_0x29e1b3.includes("icon_svg_color")) {
      _0x317a62.classList = "icon_svg_color active_icon_svg_color";
    }
  });
}
function text_besar_1() {
  $("#list_strip_loading_perbesar_text").show();
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_1", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x443d32, _0x5b2eb4) {
    $(_0x5b2eb4).css("font-size", '');
    var _0x5c3dd5 = $(_0x5b2eb4).css("font-size");
    var _0x56fc1a = parseInt(_0x5c3dd5) + 2;
    var _0x45a92d = _0x5c3dd5;
    if (!(!_0x45a92d || /^\s*$/.test(_0x45a92d)) && _0x45a92d != undefined && _0x45a92d != '') {
      _0x45a92d = _0x56fc1a + 'px';
    } else {
      _0x45a92d = "12px";
    }
    $(_0x5b2eb4).cssImportant("font-size", _0x45a92d);
  });
}
function text_besar_2() {
  $("#list_strip_loading_perbesar_text").show();
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_2", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x787f08, _0x9d3179) {
    $(_0x9d3179).css("font-size", '');
    var _0x3d514f = $(_0x9d3179).css("font-size");
    var _0x4e0cc3 = parseInt(_0x3d514f) + 4;
    var _0x3291d0 = _0x3d514f;
    if (!(!_0x3291d0 || /^\s*$/.test(_0x3291d0)) && _0x3291d0 != undefined && _0x3291d0 != '') {
      _0x3291d0 = _0x4e0cc3 + 'px';
    } else {
      _0x3291d0 = "14px";
    }
    $(_0x9d3179).cssImportant("font-size", _0x3291d0);
  });
}
function text_besar_3() {
  $("#list_strip_loading_perbesar_text").show();
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_3", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x81efff, _0x47823b) {
    $(_0x47823b).css("font-size", '');
    var _0x441d2b = $(_0x47823b).css("font-size");
    var _0x334cfe = parseInt(_0x441d2b) + 6;
    var _0x14f998 = _0x441d2b;
    if (!(!_0x14f998 || /^\s*$/.test(_0x14f998)) && _0x14f998 != undefined && _0x14f998 != '') {
      _0x14f998 = _0x334cfe + 'px';
    } else {
      _0x14f998 = "16px";
    }
    $(_0x47823b).cssImportant("font-size", _0x14f998);
  });
}
function text_besar_4() {
  $("#list_strip_loading_perbesar_text").show();
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_1", "aktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_2", "aktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_3", "aktif");
  strip_loading_v4("#list_strip_loading_perbesar_text", "#strip_loading_4", "aktif");
  $("*:not(\"#widget_menu_disabilitas *\")").each(function (_0x543f12, _0x525bdf) {
    $(_0x525bdf).css("font-size", '');
    var _0x50c3b8 = $(_0x525bdf).css("font-size");
    var _0x5a4c71 = parseInt(_0x50c3b8) + 8;
    var _0x15dab9 = _0x50c3b8;
    if (!(!_0x15dab9 || /^\s*$/.test(_0x15dab9)) && _0x15dab9 != undefined && _0x15dab9 != '') {
      _0x15dab9 = _0x5a4c71 + 'px';
    } else {
      _0x15dab9 = "18px";
    }
    $(_0x525bdf).cssImportant("font-size", _0x15dab9);
  });
}
function cek_animate_new_widget() {
  jQuery.fx.off = true;
  $(filter_hight_jquery_v3).each(function (_0x47684c, _0x3e1d5c) {
    $(_0x3e1d5c).cssImportant("animation-duration", '0s');
    $(_0x3e1d5c).cssImportant("transition", "none");
    $(_0x3e1d5c).cssImportant("animation", "none");
    $(_0x3e1d5c).clearQueue();
  });
}
function isBlank(_0x50fc38) {
  return !_0x50fc38 || /^\s*$/.test(_0x50fc38);
}
function handleError(_0x3069f1) {
  if (_0x3069f1.message) {} else {}
}
window.addEventListener("error", handleError, true);
function website_track(_0x1b6b9a) {
  var _0x58ec2c = localStorage.getItem("tooltip_active");
  var _0x188e08 = localStorage.getItem("action_widget_profil");
  if (_0x58ec2c != null || _0x188e08 != null) {
    if (_0x58ec2c == 1 || _0x188e08 == 1 || _0x188e08 == 5 || _0x188e08 == 6) {
      $("#move_tooltip_data").css("display", "flex");
      $(".tooltip_data_move_mouse_new").css({
        'left': _0x1b6b9a.pageX + 20,
        'top': _0x1b6b9a.pageY - 20
      });
      $("#move_tooltip_data").css("visibility", "hidden");
      $("#move_tooltip_data").text('');
      setTimeout(() => {
        if ($(_0x1b6b9a.target).css("display") != "none" && $(_0x1b6b9a.target).css("visibility") != "hidden") {
          var _0x49e7e0 = $(_0x1b6b9a.target).text();
          var _0x5e9069 = _0x49e7e0.replace(/ +(?= )/g, '');
          var _0x322253 = _0x5e9069.replace(/^\s+/g, '');
          var _0x270db2 = _0x322253.replace(/\s+$/g, '');
          var _0x1a45b8 = $(_0x1b6b9a.target).attr("placeholder");
          if (_0x270db2.length >= 3 && _0x270db2.length < 125) {
            if (_0x270db2 != '' && _0x270db2 != null && _0x270db2 != undefined) {
              $("#move_tooltip_data").css("visibility", "visible");
              $("#move_tooltip_data").text(_0x270db2);
            } else {
              $("#move_tooltip_data").css("visibility", "hidden");
              $("#move_tooltip_data").text('');
            }
          } else if (_0x1a45b8 != '' && _0x1a45b8 != null && _0x1a45b8 != undefined) {
            $("#move_tooltip_data").css("visibility", "visible");
            $("#move_tooltip_data").text(_0x1a45b8);
          } else {
            $("#move_tooltip_data").css("visibility", "hidden");
            $("#move_tooltip_data").text('');
          }
        }
      }, 100);
    }
  }
  var _0x254a4c = localStorage.getItem("action_kursor_change");
  var _0x188e08 = localStorage.getItem("action_widget_profil");
  if (_0x254a4c != null || _0x188e08 != null) {
    if (_0x254a4c == 2 || _0x188e08 == 8) {
      var _0xa0afe = _0x1b6b9a.clientY - 50;
      var _0x2061b4 = _0x1b6b9a.clientY + 50;
      var _0x240bba = "calc(100% - " + _0x2061b4;
      $("#rwMaskTop").css({
        'height': _0xa0afe + 'px'
      });
      $("#rwMaskBottom").css({
        'height': _0x240bba + 'px'
      });
    } else if (_0x254a4c == 3 || _0x188e08 == 6) {
      setTimeout(async () => {
        gsap.set(".line_baris_fat_hul", {
          'xPercent': -50
        });
        var _0x146d07 = gsap.quickSetter(".line_baris_fat_hul", 'x', 'px');
        await _0x146d07(_0x1b6b9a.x);
        $("#line_move_cursor_position").show();
        $("#line_move_cursor_position").css({
          'top': _0x1b6b9a.clientY - 15
        });
      }, 90);
    }
  }
}
function data_move_mouse() {
  if (action_kursor_widget.length > 0) {
    if (action_kursor_widget.length == 1) {
      $("#slider_mouse_masked").hide();
      $("#slider_mouse_masked_line").hide();
    } else {
      if (action_kursor_widget.length == 2) {
        $("#slider_mouse_masked").show();
        $("#slider_mouse_masked_line").hide();
        $("#slider_mouse_masked").html("\n<div id=\"rwMaskTop\" class=\"opacity_screen1\">\n    <div class=\"garis_screen1\">\n    </div>\n</div>\n\n\n<div  id=\"rwMaskBottom\" class=\"opacity_screen2\">\n    <div class=\"garis_screen2\">\n    </div>\n</div>");
      } else {
        if (action_kursor_widget.length == 3) {
          $("#slider_mouse_masked").hide();
          $("#slider_mouse_masked_line").show();
          $("#slider_mouse_masked_line").html("<div class=\"line_baris_fat_hul\" id=\"line_move_cursor_position\">\n    <div class=\"line_baris_fat_hul_arrow\"></div>\n</div>");
        }
      }
    }
  } else {
    $("#slider_mouse_masked").hide();
    $("#slider_mouse_masked_line").hide();
  }
}
addEventListener("mousemove", website_track, false);
function hit_api_tracking(_0x1c4d0a, _0x2daf1d) {
  var _0x436390 = {
    'url': "https://web.animemusic.us/api-track-aksesibilitas/index.php?web=" + _0x1c4d0a + "&menu-disabilitas=" + _0x2daf1d,
    'method': "GET",
    'timeout': 0x0,
    'processData': false,
    'mimeType': "multipart/form-data",
    'contentType': false
  };
  $.ajax(_0x436390).done(function (_0x4e4b1b) {
    var _0x92adc0 = JSON.parse(_0x4e4b1b);
    if (_0x92adc0.code == 0) {
      hit_api_path(base_url_website, path_javascript);
    }
  });
}
function hit_api_path(_0x518bf2, _0x5a994a) {
  $.ajax({
    'method': "POST",
    'url': "https://web.animemusic.us/api-track-aksesibilitas/path_url.php",
    'dataType': "json",
    'data': JSON.stringify({
      'domain_web': _0x518bf2,
      'path_web': _0x5a994a
    }),
    'success': function (_0x290e28) {}
  });
}
