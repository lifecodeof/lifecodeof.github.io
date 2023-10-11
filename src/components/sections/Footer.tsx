const github = "/assets/social/github.svg"
const linkedin = "/assets/social/linkedin.svg"


export default function Footer() {
    return (
        <footer className='p-4  flex justify-between max-w-lg mx-auto'>
            <p>Semih Koyuncu</p>
            <div className='flex [&>*]:mx-1'>
                <a href="https://github.com/lifecodeof"><img src={github} alt="github" width={32} height={32} /></a>
                <a href="https://linkedin.com/in/lifecodeof"><img src={linkedin} alt="linkedin" width={32} height={32} /></a>
            </div>
        </footer>
    )
}