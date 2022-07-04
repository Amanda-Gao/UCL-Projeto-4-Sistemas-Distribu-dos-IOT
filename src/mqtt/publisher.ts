import mqtt from 'mqtt'
import { myIp } from '../server'

const client = mqtt.connect(`mqtt://${myIp}`)

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

client.on('connect', () => {
  setInterval(() => {
    client.publish(
      'Sensor/Doku',
      JSON.stringify({
        home: 'PythonHouse',
        email: 'amanda99@ucl.br',
        cl2: { initials: 'CL2', name: 'Cloro', level: getRandomArbitrary(0, 30) },
        no2: { initials: 'NO2', name: 'Dióxido de Nitrogênio', level: getRandomArbitrary(0, 50) },
        r22: { initials: 'R22', name: 'Clorodifluorometano', level: getRandomArbitrary(0, 100) },
        co2: { initials: 'CO2', name: 'Monóxido de Carbono', level: getRandomArbitrary(0, 100) },
        status: new Date().getTime()
      })
    )
    console.log('message sent')
  }, 2000)
})