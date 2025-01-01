export const TopNav = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <nav className="flex justify-center items-center gap-6 bg-[#1b1a18] mt-6 px-4 py-3 pr-6 rounded-lg">
                <a className="bg-[#141311] px-3 py-2 rounded-md text-[16px]" href="">
                    Home
                </a>
                <a className="text-[14px]" href="#projects">Projects</a>
                <a className="text-[14px]" href="https://drive.google.com/file/d/1Af8eSYzKXlytu30tVgMhHG80sh192Xn_/view?usp=sharing">Resume</a>
                <a className="text-[14px]" href="#contact">Contact</a>
            </nav>
        </div>
    );
}