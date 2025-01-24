import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

const styles = () => {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest("./dist/css"))
}

export default styles
export function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel([styles]))
}