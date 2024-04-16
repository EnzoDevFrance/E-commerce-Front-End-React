import '../styles/Banner.css'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner  


/*
A la place de className
style={{
    color: 'black',
    textAlign: 'right',
    pasdding: 32,
    borderBottom: 'solid 3px black'
}}

const numbers = [1, 2, 3, 4]
const doubles = numbers.map(x => x * 2) // [2, 4, 6, 8]
*/