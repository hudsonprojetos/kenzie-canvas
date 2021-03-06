import React, { useState } from 'react'
import SideBarModules from '../../components/side-bar_modules'
import Header from '../../components/header_modules/'
import SideBarLessons from '../../components/side-bar-lessons_modules/'
import Content from '../../components/render-content_modules/'
import { lessons } from '../../helper/lesson_array'
import Instructions from '../../components/00-first-lesson_modules/'
import styled from 'styled-components'
import Lives from '../../components/render-lives_modules/'

const Modules = (props) => {
    const [menuModules, setMenuModules] = useState(false)
    const [selectLesson, setSelectLesson] = useState(null) //select first lesson by default
    const [lessonTitle, setLessonTitle] = useState("Aula 1")
    console.log(menuModules)

    const renderLives = () => {
        setSelectLesson("lives")
        console.log(selectLesson)
    }

    return (
        <div >
            <SideBarModules />
            <Header setMenuModules={setMenuModules} menuModules={menuModules} />
            <PageContainer>
                {menuModules === true ? <SideBarLessons setState={setSelectLesson} setLessonTitle={setLessonTitle} renderLives={renderLives} /> : null}
                {selectLesson === null ? <Instructions /> : selectLesson === "lives" ? <Lives /> : <Content lessons={lessons} selectLesson={selectLesson} title={lessonTitle} />}
            </PageContainer>
        </div>
    )
}

export default Modules

const PageContainer = styled.div`
       
`