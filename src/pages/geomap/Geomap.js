import React, { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import "./style.css";

function Geomap() {
  const user = useContext(AuthContext);
  const [select, setSelect] = React.useState("boothpremises");

  // Mapping of select values to iframe URLs
  const iframeUrls = {
    boothpremises:
      "https://www.google.com/maps/d/embed?mid=1A3ZL5EDRhddb-vlYRFG34iiXe_Hzy3Q&ehbc=2E312F&noprof=1",
    criticalpolingpremises:
      "https://www.google.com/maps/d/embed?mid=1098uxQGJMdzsS0QhdRzpgecE8iXQu9A&ehbc=2E312F&noprof=1",
    criticalnewdelhi:
      "https://www.google.com/maps/d/embed?mid=1DZ_O4G-_w4MANvmGWZmjhPpNMXAUz_M&ehbc=2E312F&noprof=1",
    criticalsouthdelhi:
      "https://www.google.com/maps/d/embed?mid=1jIM8Vnd2GZC5KlfFUeVgZkB0XoCOCrM&ehbc=2E312F&noprof=1",
    totalpremisesnewdelhi:
      "https://www.google.com/maps/d/embed?mid=1R4gzgFCguQUOj26FL0HdyD61iH0-Pbo&ehbc=2E312F&noprof=1",
    totalpremisessouth:
      "https://www.google.com/maps/d/embed?mid=1X3gsdFuNsMMFPGFDH2M-WYVafVEnmsA&ehbc=2E312F&noprof=1",
  };

  return (
    <div className="geomap">
      {/* dropdown list */}
      <select
        name="select"
        id="select"
        className="selectgeo"
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option value="boothpremises" defaultChecked>
          Booth premises
        </option>
        <option value="criticalpolingpremises">Critical Poling Premises</option>
        <option value="criticalnewdelhi">Cretical New delhi</option>
        <option value="criticalsouthdelhi">Critical South delhi</option>
        <option value="totalpremisesnewdelhi">Total Premises new delhi</option>
        <option value="totalpremisessouth">Total Premises south</option>
      </select>

      {/* Render the selected iframe based on the select value */}
      {select && (
        <iframe src={iframeUrls[select]} width="100%" height="550px"></iframe>
      )}
    </div>
  );
}

export default Geomap;
