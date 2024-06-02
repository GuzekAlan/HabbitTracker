const Header = ({text: text}: {text: string}) => {
    return (
        <p className="flex justify-center text-4xl p-4 bg-blue-100 text-blue-400 mt-[1rem] mb-[10rem] rounded-lg">{text}</p>
    )
}

export default  Header;