import {Link} from 'react-router-dom';
import students from '../data';

function Home() {
    return(
        <div>
        <h1>Students Data</h1>
        {students.map((student)=>(
            <Link key={student.id} to={`/topic/${student.id}`}>
         <div>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
         </div>
            </Link>
       ) )}
        </div>
    );
}
export default Home;