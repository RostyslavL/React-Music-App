import { v4 as uuidv4} from 'uuid';

function chillHop(){
    return [
        {
            name: "AMNESIA",
            artist: "l19u1d",
            style: "PHONK",
            cover:"./covers/cover_1.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/l19u1d PHONK - AMNESIA.mp3"
        },
        {
            name: "Perfect Storm",
            style: "Jazz",
            artist: "Aviino",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9363"
        },
    ]
    
}
export default chillHop