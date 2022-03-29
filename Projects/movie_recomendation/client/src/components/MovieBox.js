import axios from 'axios'
import React,{useEffect} from 'react'

export default props => {
    // const [movie, setMovie] = ({})
    // useEffect(()=>{
    //     axios.get('https://api.themoviedb.org/3/movie/76341?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e')
    //         .then(res =>{
    //             console.log(res)
    //             setMovie(res)
    //         })
    //         .catch(err =>{
    //             console.log(err)s
    //             console.log(movie)
    //         })
    // },[])
    axios.get('https://api.themoviedb.org/3/movie/76341?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e')

    const MovieBox = {
        height: '400px',
        width: '1000px',
        backgroundColor: 'white',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: '10px' 

    }

    return(
        <div>
            <div className=' shadow mx-auto mt-5 p-3' style={MovieBox}>
                <div className='row'>
                    <div className='col'>
                        <img src="#" alt="Movie Poster" />
                    </div>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col'>
                                    <h1>Movie</h1>
                            </div>
                            <div className='col'>
                                <h4>Rating</h4>
                            </div>
                        </div>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}