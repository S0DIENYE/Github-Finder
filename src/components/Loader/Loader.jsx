import React, { useEffect } from 'react';
import Logo from './page-loader.png';
import './loaderStyle.css';

const Loader = () => {

    useEffect(() => {
        initLoader()
        // eslint-disable-next-line
      }, [])

  return (
    <div id="page-loader" className="text-center">
        <div className="loader">
            <img src={Logo} alt="page-loader" />
            <h1>Github Finder</h1>
        </div>
    </div>
  )
}

function initLoader() {

        const loader = document.querySelector('#page-loader');

        if(loader)
        loader.classList.add('active')

        setTimeout(() => {
            if(loader)
            loader.classList.remove('active')
        }, 2000)

    // window.onloadstart
    window.onbeforeunload = () => {
        const loader = document.querySelector('#page-loader');
        
        loader.classList.toggle('active')
        setTimeout(() => {
            loader.classList.remove('active')
        }, 2000)
    }
}

export function toggleLoader() {
    const loader = document.querySelector('#page-loader');

    if(loader)
    loader.classList.add('active')

    setTimeout(() => {
        if(loader)
        loader.classList.remove('active')
    }, 1500)
}

export default Loader;