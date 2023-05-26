import  {useEffect, useState} from "react"
import Hero from "./Componet/Hero"
import Services from "./Componet/Services"
import About from "./Layout/About"
import Footer from "./Layout/Footer"



const App = () => {

  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);


  return (
  
    <>
     <button type="button" onClick={handleThemeSwitch} className=" fixed top-2 right-2 z-10 p-[2px] rounded-xl bg-blue-500 text-black">
      {theme === 'dark' ? <h4>🌙</h4>  : <h4>🌞</h4> }
    </button>
      <div className=" bg-white dark:bg-black">
    <Hero />
    <Services />
    <About />
    <Footer />
      </div>
    </>
   
  )
}

export default App