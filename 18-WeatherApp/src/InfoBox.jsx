import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){

 const INIT_URL="https://images.unsplash.com/photo-1567448786891-efeeb717a231?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlydHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  // let info={
  //   city:"Delhi", 
  //   temp:25.05,
  //   tempMin:25.05,
  //   tempMax:25.05,
  //   humidity:47,
  //   weather:"haze"
  // };

  return(

    <div className="InfoBox">

      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" >
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>

        <p>Temperature: {info.temp}°C</p>
        <p>Min Temp: {info.tempMin}°C</p>
        <p>Max Temp: {info.tempMax}°C</p>
        <p>Humidity: {info.humidity}%</p>


        <p>
  The weather can be described as <i>{info.weather}</i>
</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}