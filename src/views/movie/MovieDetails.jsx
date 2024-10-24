import {useParams} from "react-router"
export default function MovieDetails(){
  const {id} = useParams();
  return (
    <>
    <div>movies Details Page ID {id}</div>
    </>
  )
}