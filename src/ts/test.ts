import Map from 'ol/Map'
import View from 'ol/View'
import { Tile as TileLayer } from 'ol/layer'
import { OSM } from 'ol/source'

class Test1 {
  engine: string
  public map: Map
  constructor () {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: [0,0],
        zoom: 2
      })
    })
  }

}
export default Test1
