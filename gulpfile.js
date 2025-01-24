import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import imagemin from 'gulp-imagemin'

const styles = () => {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest("./dist/css"))
}

const images = () => {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"))
}

export default gulp.parallel(styles, images)

export function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel([styles]))
}