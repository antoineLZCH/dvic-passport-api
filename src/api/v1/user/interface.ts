interface ISkill {
    name: string,
    description: string,
    required_skills: ISkill[]
}

interface IOwnedSkill {
    level: number,
    skill_info: ISkill[]
}

export default interface IUser {
    login_user: string,
    owned_skills: IOwnedSkill[]
}
