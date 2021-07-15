"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
// const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
// const postcss = require("gulp-postcss");

const dist = "./dist/";
const prod = "./build/";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("build-css", () => {
    return gulp.src("./src/*.css")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-sound", () => {
    return gulp.src("./src/sound/*.mp3")
                .pipe(gulp.dest(dist + 'sound/'))
                .pipe(browsersync.stream());
})

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/*.css", gulp.parallel("build-css"));
    gulp.watch("./src/sound/*.mp3", gulp.parallel("build-sound"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("copy-html", "build-css", "build-sound", "build-js"));

gulp.task("prod", () => {
    gulp.src("./src/index.html")
        .pipe(gulp.dest(prod));
    gulp.src("./src/sound/*.mp3")
        .pipe(gulp.dest(prod + 'sound/'));

    gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [['@babel/preset-env', {
                            debug: false,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                      }
                    }
                  }
                ]
              }
        }))
        .pipe(gulp.dest(prod));
    
    return gulp.src("./src/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest(prod));
});

gulp.task("default", gulp.parallel("watch", "build"));