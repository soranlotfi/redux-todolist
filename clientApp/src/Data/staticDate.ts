import {faTelegram , faGithub , faLinkedin , faGoogle} from "@fortawesome/free-brands-svg-icons"
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
export interface IconsPackInterface{
    type:string,
    icon : IconDefinition
}

const iconsPack :IconsPackInterface[]=[
    {
        type:"socialMedia",
        icon : faTelegram
    },
    {
        type:"socialMedia",
        icon : faGoogle
    },{
        type:"socialMedia",
        icon :faLinkedin
    },{
        type:"socialMedia",
        icon : faGithub
    }
]

export default iconsPack