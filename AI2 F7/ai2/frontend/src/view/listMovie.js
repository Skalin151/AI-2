import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link } from "react-router-dom";
import React ,{useEffect, useState} from "react";
import Swal from 'sweetalert2'

const baseUrl = "http://localhost:8080";

export default function ListMovie(){
    const [Movie, setMovie] = useState([]);

    useEffect(() => {
        LoadMovie()
    }, []);

    function LoadMovie(){
        const url = baseUrl + '/movie/list';

        axios.get(url)
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setMovie(data);
            }
            else {
                alert("Error Web Service!");
            }
        })
        .catch(error => {
            alert(error)
        });
    }
    return (
        <table className="table table-hover table-striped">
            <thead className = "thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Description</th>
                    <th scope="col">Genre</th>
                </tr>
            </thead>

            <tbody>
                <LoadFillData/>
            </tbody>
        </table>
    );

    function LoadFillData(){
        return Movie.map((data, index) => {
            return(
                <tr key = {index}>
                    <th>{index + 1}</th>
                    <td>{data.title}</td>
                     <td> <img alt = 'MoviePhoto' style = {{width: '75px'}} src={data.photo}/> </td>
                    <td>{data.description}</td>
                    <td>{data.genre.description}</td>
                    <td>
                    <Link className='btn btn-outline-info' to = {"/movie/update/" + data.id}>Edit
                    </Link>                    
                    </td>
                    <td>
                        <button className='btn btn-outline-danger' onClick={() => onDelete(data.id)}>Delete</button>
                    </td>
                </tr>
        )
        });
    }

    function onDelete(movie){
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to view it afterwards!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value){
                sendDelete(movie)
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                'Canceled',
                'Movie was not deleted',
                'error'
                )
            }
        })
    }

    function sendDelete(movie){
    const url = baseUrl + "/movie/delete/" + movie
    axios.put(url)
    .then(response =>{
            if (response.data.success) {
                Swal.fire(
                    'Deleted!',
                    'The movie has been removed',
                    'success'
                )
                LoadMovie();
            }
        })
        .catch ( error => {
            alert("Error 325 ")
        });
    }
}