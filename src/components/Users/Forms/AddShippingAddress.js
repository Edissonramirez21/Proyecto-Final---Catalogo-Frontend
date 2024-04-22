import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfileAction,
  updateUserShippingAddressAction,
} from "../../../redux/slices/users/usersSlice";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";
import SuccessMsg from "../../SuccessMsg/SuccessMsg";

const AddShippingAddress = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  
  const { loading, error, profile } = useSelector((state) => state?.users);
  const user = profile?.user;

  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phone: ''
  });

  
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value.trim()
    }));
  };

  useEffect(() => {
    const { firstName, lastName, address, city, country, postalCode, phone } = formData;
    const checkValid = firstName && lastName && address && city && country && postalCode && phone;
    setIsFormValid(checkValid);
  }, [formData]); 

  
   // Envío del formulario
   const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }
    dispatch(updateUserShippingAddressAction(formData));
    window.location.reload();
  };
   
  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {/* shipping details */}
      {user?.hasShippingAddress ? (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">
            Detalles de envío
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Vuelva a comprobar su información.
          </p>
          <div>
            <p className="mt-1 text-sm text-gray-500">
              Nombre : {user?.shippingAddress?.firstName}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Apellido : {user?.shippingAddress?.lastName}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Direccion : {user?.shippingAddress?.address}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Ciudad : {user?.shippingAddress?.city}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Pais : {user?.shippingAddress?.country}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Código Postal : {user?.shippingAddress?.postalCode}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Telefono : {user?.shippingAddress?.phone}
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700">
               Nombre
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                onChange={onChange}
                value={formData.firstName}
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300  p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                onChange={onChange}
                value={formData.lastName}
                className="block w-full rounded-md border-gray-300  p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700">
              Direccion
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="address"
                onChange={onChange}
                value={formData.address}
                autoComplete="street-address"
                className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700">
              Ciudad
            </label>
            <div className="mt-1">
              <select
                type="text"
                name="city"
                onChange={onChange}
                value={formData.city}
                autoComplete="address-level2"
                className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value="">Selecciona una providencia</option>

          
          <optgroup label="Colombia">
              <option value="BOG">Bogotá</option>
              <option value="MDE">Medellín</option>
              <option value="CLO">Cali</option>
              <option value="BAQ">Barranquilla</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Cúcuta">Cúcuta</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Pereira">Pereira</option>
              <option value="Santa Marta">Santa Marta</option>
              <option value="Ibagué">Ibagué</option>
              <option value="Bello">Bello</option>
              <option value="Pasto">Pasto</option>
              <option value="Manizales">Manizales</option>
              <option value="Neiva">Neiva</option>
              <option value="Soledad">Soledad</option>
              <option value="Villavicencio">Villavicencio</option>
              <option value="Armenia">Armenia</option>
              <option value="Valledupar">Valledupar</option>
              <option value="Montería">Montería</option>
              <option value="Sincelejo">Sincelejo</option>
              <option value="Popayán">Popayán</option>
              <option value="Floridablanca">Floridablanca</option>
              <option value="Palmira">Palmira</option>
              <option value="Buenaventura">Buenaventura</option>
              <option value="Envigado">Envigado</option>
              <option value="Tulúa">Tulúa</option>
              <option value="Dosquebradas">Dosquebradas</option>
              <option value="Itagüí">Itagüí</option>
              <option value="San Andrés">San Andrés</option>
              <option value="Riohacha">Riohacha</option>
              <option value="Quibdó">Quibdó</option>
          </optgroup>


          
          <optgroup label="Estados Unidos">
              <option value="NYC">Nueva York</option>
              <option value="LAX">Los Ángeles</option>
              <option value="CHI">Chicago</option>
              <option value="HOU">Houston</option>
              <option value="PHX">Phoenix</option>
          </optgroup>

        
          <optgroup label="Canadá">
              <option value="TOR">Toronto</option>
              <option value="VAN">Vancouver</option>
              <option value="MTL">Montreal</option>
              <option value="CAL">Calgary</option>
              <option value="OTT">Ottawa</option>
          </optgroup>

         
          <optgroup label="México">
              <option value="CDMX">Ciudad de México</option>
              <option value="GDL">Guadalajara</option>
              <option value="MTY">Monterrey</option>
              <option value="PUE">Puebla</option>
              <option value="TIJ">Tijuana</option>
          </optgroup>

          
          <optgroup label="Ghana">
              <option value="ACC">Accra</option>
              <option value="KMS">Kumasi</option>
              <option value="TML">Tamale</option>
              <option value="TAK">Takoradi</option>
          </optgroup>

        
          <optgroup label="Nigeria">
              <option value="LAG">Lagos</option>
              <option value="ABU">Abuja</option>
              <option value="KAN">Kano</option>
              <option value="IBA">Ibadan</option>
          </optgroup>

        
          <optgroup label="Sudáfrica">
              <option value="JNB">Johannesburgo</option>
              <option value="CPT">Ciudad del Cabo</option>
              <option value="DBN">Durban</option>
              <option value="PRT">Pretoria</option>
          </optgroup>

          
          <optgroup label="Argentina">
              <option value="BUE">Buenos Aires</option>
              <option value="COR">Córdoba</option>
              <option value="MDZ">Mendoza</option>
              <option value="ROS">Rosario</option>
          </optgroup>

        
          <optgroup label="Brasil">
              <option value="SAO">São Paulo</option>
              <option value="RIO">Río de Janeiro</option>
              <option value="BSB">Brasilia</option>
              <option value="SAL">Salvador</option>
          </optgroup>

        
          <optgroup label="Chile">
              <option value="SCL">Santiago</option>
              <option value="VAP">Valparaíso</option>
              <option value="CON">Concepción</option>
              <option value="LAP">La Serena</option>
          </optgroup>

          
          <optgroup label="Perú">
              <option value="LIM">Lima</option>
              <option value="AQP">Arequipa</option>
              <option value="TRU">Trujillo</option>
              <option value="CUS">Cusco</option>
          </optgroup>

         
          <optgroup label="Uruguay">
              <option value="MVD">Montevideo</option>
              <option value="PDP">Punta del Este</option>
              <option value="SAL">Salto</option>
          </optgroup>

         
          <optgroup label="Venezuela">
              <option value="CCS">Caracas</option>
              <option value="MAR">Maracaibo</option>
              <option value="VLN">Valencia</option>
              <option value="BAR">Barquisimeto</option>
          </optgroup>

              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700">
              País
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country"
                value={formData.country}
                onChange={onChange}
                className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                 <option value="">Selecciona un país</option>

                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="MEX">Mexico</option>
                <option value="Ghana">Ghana</option>
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="ARG">Argentina</option>
                <option value="BRA">Brazil</option>
                <option value="CHL">Chile</option>
                <option value="COL">Colombia</option>
                <option value="PER">Peru</option>
                <option value="URY">Uruguay</option>
                <option value="VEN">Venezuela</option>
                <option value="ESP">Spain</option>
                <option value="FRA">France</option>
                <option value="GER">Germany</option>
                <option value="ITA">Italy</option>
                <option value="GBR">United Kingdom</option>
                <option value="CHN">China</option>
                <option value="JPN">Japan</option>
                <option value="IND">India</option>
                <option value="NGA">Nigeria</option>
                <option value="ZAF">South Africa</option>
                <option value="AUS">Australia</option>
                <option value="NZL">New Zealand</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700">
              Estado / Providencia
            </label>
            <div className="mt-1">
              <select 
                name="region"
                onChange={onChange}
                value={formData.region}
                autoComplete="address-level1"
                className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option value="">Selecciona una providencia</option>


    <optgroup label="---- COLOMBIA ----">
                  <option value="AMZ">Amazonas</option>
                  <option value="ANT">Antioquia</option>
                  <option value="ARA">Arauca</option>
                  <option value="ATL">Atlántico</option>
                  <option value="BOL">Bolívar</option>
                  <option value="BOY">Boyacá</option>
                  <option value="CAL">Caldas</option>
                  <option value="CAQ">Caquetá</option>
                  <option value="CAS">Casanare</option>
                  <option value="CAU">Cauca</option>
                  <option value="CES">Cesar</option>
                  <option value="CHO">Chocó</option>
                  <option value="CUN">Cundinamarca</option>
                  <option value="COR">Córdoba</option>
                  <option value="GUA">Guainía</option>
                  <option value="GUV">Guaviare</option>
                  <option value="HUI">Huila</option>
                  <option value="LAG">La Guajira</option>
                  <option value="MAG">Magdalena</option>
                  <option value="MET">Meta</option>
                  <option value="NAR">Nariño</option>
                  <option value="NSA">Norte de Santander</option>
                  <option value="PUT">Putumayo</option>
                  <option value="QUI">Quindío</option>
                  <option value="RIS">Risaralda</option>
                  <option value="SAP">San Andrés y Providencia</option>
                  <option value="SAN">Santander</option>
                  <option value="SUC">Sucre</option>
                  <option value="TOL">Tolima</option>
                  <option value="VAC">Valle del Cauca</option>
                  <option value="VAU">Vaupés</option>
                  <option value="VID">Vichada</option>
                  <option value="DC">Bogotá DC</option>
    </optgroup>

    <optgroup label="---- USA ----">
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="FL">Florida</option>
        <option value="NY">New York</option>
        <option value="PA">Pennsylvania</option>
        <option value="IL">Illinois</option>
        <option value="OH">Ohio</option>
        <option value="GA">Georgia</option>
        <option value="NC">North Carolina</option>
        <option value="MI">Michigan</option>
    </optgroup>


    <optgroup label="---- CANADÁ ----">
        <option value="ON">Ontario</option>
        <option value="QC">Quebec</option>
        <option value="BC">British Columbia</option>
        <option value="AB">Alberta</option>
        <option value="MB">Manitoba</option>
        <option value="SK">Saskatchewan</option>
        <option value="NS">Nova Scotia</option>
        <option value="NB">New Brunswick</option>
        <option value="NL">Newfoundland and Labrador</option>
        <option value="PE">Prince Edward Island</option>
    </optgroup>

    <optgroup label="---- MÉXICO ----">
        <option value="CDMX">Ciudad de México</option>
        <option value="JAL">Jalisco</option>
        <option value="NLE">Nuevo León</option>
        <option value="CHP">Chiapas</option>
        <option value="OAX">Oaxaca</option>
        <option value="CHH">Chihuahua</option>
        <option value="VER">Veracruz</option>
        <option value="GUA">Guanajuato</option>
        <option value="PUE">Puebla</option>
        <option value="MIC">Michoacán</option>
    </optgroup>

    <optgroup label="---- ARGENTINA ----">
        <option value="BUE">Buenos Aires</option>
        <option value="CBA">Córdoba</option>
        <option value="SFE">Santa Fe</option>
        <option value="MZA">Mendoza</option>
        <option value="TUC">Tucumán</option>
        <option value="ERI">Entre Ríos</option>
        <option value="SAL">Salta</option>
        <option value="CHA">Chaco</option>
        <option value="COR">Corrientes</option>
        <option value="MIS">Misiones</option>
    </optgroup>

    <optgroup label="---- BRASIL ----">
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="MG">Minas Gerais</option>
        <option value="BA">Bahia</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="CE">Ceará</option>
        <option value="PA">Pará</option>
        <option value="MA">Maranhão</option>
    </optgroup>

    <optgroup label="--- CHILE ----">
        <option value="RM">Región Metropolitana de Santiago</option>
        <option value="VA">Valparaíso</option>
        <option value="BI">Biobío</option>
        <option value="AN">Antofagasta</option>
        <option value="MA">Magallanes</option>
    </optgroup>

   
    <optgroup label="--- PERÚ ----">
        <option value="LMA">Lima Metropolitana</option>
        <option value="CUZ">Cusco</option>
        <option value="ARE">Arequipa</option>
        <option value="LAL">La Libertad</option>
        <option value="PIU">Piura</option>
    </optgroup>

   
    <optgroup label="---- URUGUAY ----">
        <option value="MO">Montevideo</option>
        <option value="CA">Canelones</option>
        <option value="MA">Maldonado</option>
        <option value="CO">Colonia</option>
        <option value="RV">Rivera</option>
    </optgroup>

    
    <optgroup label="---- VENEZUELA ----">
        <option value="DC">Distrito Capital</option>
        <option value="ZU">Zulia</option>
        <option value="CA">Carabobo</option>
        <option value="MI">Miranda</option>
        <option value="TA">Táchira</option>
    </optgroup>

   
    <optgroup label="---- ESPAÑA ----">
        <option value="MD">Madrid</option>
        <option value="CT">Cataluña</option>
        <option value="AN">Andalucía</option>
        <option value="VC">Comunidad Valenciana</option>
        <option value="GA">Galicia</option>
    </optgroup>

   
    <optgroup label="--- FRANCIA ----">
        <option value="IDF">Île-de-France</option>
        <option value="OCC">Occitanie</option>
        <option value="NAQ">Nouvelle-Aquitaine</option>
        <option value="ARA">Auvergne-Rhône-Alpes</option>
        <option value="PAC">Provence-Alpes-Côte d'Azur</option>
    </optgroup>

    
    <optgroup label="---- ALEMANIA ----">
        <option value="BE">Berlin</option>
        <option value="BW">Baden-Württemberg</option>
        <option value="BY">Baviera</option>
        <option value="NRW">Renania del Norte-Westfalia</option>
        <option value="HE">Hesse</option>
    </optgroup>

   
    <optgroup label="--- ITALIA ----">
        <option value="LOM">Lombardía</option>
        <option value="LAZ">Lacio</option>
        <option value="VEN">Véneto</option>
        <option value="SIC">Sicilia</option>
        <option value="TOS">Toscana</option>
    </optgroup>

   
    <optgroup label="---- REINO UNIDO ----">
        <option value="ENG">Inglaterra</option>
        <option value="SCT">Escocia</option>
        <option value="WLS">Gales</option>
        <option value="NI">Irlanda del Norte</option>
    </optgroup>

    
    <optgroup label="---- CHINA ----">
        <option value="BJ">Pekín</option>
        <option value="SH">Shanghái</option>
        <option value="GD">Guangdong</option>
        <option value="ZJ">Zhejiang</option>
        <option value="JS">Jiangsu</option>
    </optgroup>

    
    <optgroup label="---- JAPÓN ----">
        <option value="TK">Tokio</option>
        <option value="KN">Kanagawa</option>
        <option value="OS">Osaka</option>
        <option value="AI">Aichi</option>
        <option value="HG">Hokkaido</option>
    </optgroup>

    
    <optgroup label="---- INDIA ----">
        <option value="MH">Maharashtra</option>
        <option value="DL">Delhi</option>
        <option value="KA">Karnataka</option>
        <option value="TN">Tamil Nadu</option>
        <option value="UP">Uttar Pradesh</option>
    </optgroup>

   
    <optgroup label="---- AUSTRALIA ----">
        <option value="NSW">Nueva Gales del Sur</option>
        <option value="VIC">Victoria</option>
        <option value="QLD">Queensland</option>
        <option value="WA">Australia Occidental</option>
        <option value="SA">Australia del Sur</option>
    </optgroup>

   
    <optgroup label="---- NUEVA ZELANDA ----">
        <option value="AUK">Auckland</option>
        <option value="WLG">Wellington</option>
        <option value="CAN">Canterbury</option>
        <option value="OTG">Otago</option>
        <option value="WKO">Waikato</option>
    </optgroup>

                  </select>
            </div>
          </div>

          <div>
  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
    Código Postal
  </label>
  <div className="mt-1">
    <input
      list="postal-codes"
      type="text"
      name="postalCode"
      onChange={onChange}
      value={formData.postalCode}
      autoComplete="postal-code"
      className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
     
    <datalist id="postal-codes">

      <optgroup label="Colombia">
            <option value="110111-COL">Bogotá - 110111</option>
            <option value="050012-COL">Medellín - 050012</option>
            <option value="760001-COL">Cali - 760001 </option>
            <option value="080001-COL">Barranquilla - 080001 </option>
            <option value="130001-COL">Cartagena - 130001 </option>
            <option value="680021-COL">Bucaramanga - 680021 </option>
        </optgroup>
         
      <optgroup label="Estados Unidos">
          <option value="10001">New York, NY - 10001</option>
          <option value="90001">Los Angeles, CA - 90001</option>
          <option value="60601">Chicago, IL - 60601</option>
          <option value="77001">Houston, TX - 77001</option>
          <option value="85001">Phoenix, AZ - 85001</option>
      </optgroup>

    
      <optgroup label="Canadá">
          <option value="M5A">Toronto, ON - M5A</option>
          <option value="V5K">Vancouver, BC - V5K</option>
          <option value="H1A">Montreal, QC - H1A</option>
          <option value="T2A">Calgary, AB - T2A</option>
          <option value="K1A">Ottawa, ON - K1A</option>
      </optgroup>

     
      <optgroup label="México">
          <option value="01000">Ciudad de México, CDMX - 01000</option>
          <option value="44100">Guadalajara, Jalisco - 44100</option>
          <option value="64000">Monterrey, Nuevo León - 64000</option>
          <option value="72000">Puebla, Puebla - 72000</option>
          <option value="22000">Tijuana, Baja California - 22000</option>
      </optgroup>

     
      <optgroup label="Ghana">
          <option value="GL-076">Accra - GL-076</option>
          <option value="KS-582">Kumasi - KS-582</option>
      </optgroup>

    
      <optgroup label="Nigeria">
          <option value="100001">Lagos - 100001</option>
          <option value="900001">Abuja - 900001</option>
      </optgroup>

     
      <optgroup label="Sudáfrica">
          <option value="2001">Johannesburgo - 2001</option>
          <option value="8001">Ciudad del Cabo - 8001</option>
      </optgroup>

     
      <optgroup label="Argentina">
          <option value="C1001">Buenos Aires - C1001</option>
          <option value="X5000">Córdoba - X5000</option>
      </optgroup>

     
      <optgroup label="Brasil">
          <option value="01000-000">São Paulo - 01000-000</option>
          <option value="20010-000">Río de Janeiro - 20010-000</option>
      </optgroup>

     
      <optgroup label="Chile">
          <option value="8320000">Santiago - 8320000</option>
          <option value="2340000">Valparaíso - 2340000</option>
      </optgroup>

      
      <optgroup label="Perú">
          <option value="15001">Lima - 15001</option>
          <option value="04001">Arequipa - 04001</option>
      </optgroup>

      
      <optgroup label="Uruguay">
          <option value="11100">Montevideo - 11100</option>
      </optgroup>

     
      <optgroup label="Venezuela">
          <option value="1010">Caracas - 1010</option>
      </optgroup>

     
    </datalist>
  </div>
</div>


<div className="sm:col-span-2">
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
    Teléfono
  </label>
  <div className="mt-1">
    <input
      list="country-codes"
      type="text"
      name="phone"
      id="phone"
      onChange={onChange}
      value={formData.phone}
      placeholder="+1 234567890"
      autoComplete="tel"
      className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
     


    <datalist id="country-codes">
      <option value="+57">Colombia (+57)</option>
      <option value="+1">Estados Unidos (+1)</option>
      <option value="+1">Canadá (+1)</option>
      <option value="+52">México (+52)</option>
      <option value="+233">Ghana (+233)</option>
      <option value="+234">Nigeria (+234)</option>
      <option value="+27">Sudáfrica (+27)</option>
      <option value="+54">Argentina (+54)</option>
      <option value="+55">Brasil (+55)</option>
      <option value="+56">Chile (+56)</option>
      <option value="+51">Perú (+51)</option>
      <option value="+598">Uruguay (+598)</option>
      <option value="+58">Venezuela (+58)</option>
      <option value="+34">España (+34)</option>
      <option value="+33">Francia (+33)</option>
      <option value="+49">Alemania (+49)</option>
      <option value="+39">Italia (+39)</option>
      <option value="+44">Reino Unido (+44)</option>
      <option value="+86">China (+86)</option>
      <option value="+81">Japón (+81)</option>
      <option value="+91">India (+91)</option>
      <option value="+61">Australia (+61)</option>
      <option value="+64">Nueva Zelanda (+64)</option>
      
    </datalist>
  </div>
</div>

          {loading ? (
            <LoadingComponent />
          ) : (
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              Añadir dirección de entrega
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default AddShippingAddress;
