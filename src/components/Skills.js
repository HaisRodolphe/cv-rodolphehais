import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"


function Skills() {
    return (
        <>
            <div className="skills">
                <h2 className="h2">Compétences</h2>
                <img src="./img/html_original_wordmark_logo_icon_146478.png" alt="" className="" />
                <img src="./img/css_original_wordmark_logo_icon_146576.png" alt="" className="" />
                <img src="./img/symfony_original_wordmark_logo_icon_146328.png" alt="" className="" />
                <img src="./img/javascript_original_logo_icon_146455.png" alt="" className="" />
                <img src="./img/react_original_logo_icon_146374.png" alt="" className="" />
                <img src="./img/prog-nodejs01_icon-icons.com_50781.png" alt="" className="" />
                <img src="./img/brand_scrum_icon_158716.png" alt="" className="" />
                <img src="./img/mysql_original_wordmark_logo_icon_146417.png" alt="" className="" />
                <img src="./img/github_original_wordmark_logo_icon_146506.png" alt="" className="" />
                <img src="./img/stripe_logo_icon_167963.png" alt="" className="" />
                <img src="./img/heroku_plain_wordmark_logo_icon_146480.png" alt="" className="" />
                <img src="./img/php_pgelephant_ph_6030.png" alt="" className="" />
                <img src="./img/file_type_php_icon_130266.png" alt="" className="" />
                <img src="./img/file_type_vscode_icon_130084.png" alt="" className="" />
                <img src="./img/bootstrap_plain_wordmark_logo_icon_146620.png" alt="" className="" />
                {/* <Skill title="Html" rating="4" />
                <Skill title="CSS" rating="5" />
                <Skill title="Javascript" rating="5" />
                <Skill title="Symfony 5" rating="4" />
                <Skill title="REACT" rating="3" /> */}
            </div>
            <div className="skills">
                <h2 className="h2">Langues</h2>
                <Skill title="Anglais" rating="3" />
            </div>
            <Interests />
        </>
    )
}

export default Skills
