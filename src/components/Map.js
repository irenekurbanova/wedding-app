import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Map.module.css";

const AddressMap = (props) => {
  return (
    <YMaps>
      <div className={styles.map}>
        <Map
          width={"100%"}
          defaultState={{
            center: [59.934018, 30.293809],
            zoom: 16,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={[59.934018, 30.293809]} />
        </Map>
      </div>
    </YMaps>
  );
};

export default AddressMap;
