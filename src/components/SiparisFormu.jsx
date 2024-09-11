import React, { useEffect, useState } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
    Container,
    FormText, 
  } from 'reactstrap';
  import axios from 'axios';
import Header from './Header';
import { useHistory} from 'react-router-dom';

export default function SiparisFormu() {
    const [formData, setFormData] = useState({
      name: '',
      size: '',
      thickness: '',
      toppings: [],
      notes:'',
      quantity:1,
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const [errors, setErrors] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const toppingsOptions =[ 'Pepperoni', 'Tavuk Izgara' , 'Mısır', 'Sarımsak','Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak', 'Kanada Jambonu', 'Domates','Jalepeno'];
    const thicknessOptions = ['İnce Hamur', 'Kalın Hamur','Glutensiz Hamur'];
    const toppingPrice = 5;
    const sizes = ['Küçük', 'Orta', 'Büyük'];
    const history = useHistory();
    
    useEffect(()=> {
        const validationErrors = validate();
        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length ===0)
    },[formData]);

    const handleChange = (e) => {
        const {name,value,type,checked} = e.target;

        if(type === 'checkbox') {
           const newToppings = checked
           ? [...formData.toppings,value]
           : formData.toppings.filter((topping)=> topping !== value);
           setFormData({...formData, toppings: newToppings});
        } else if (name === 'quantity'){
            setFormData({...formData,[name]:parseInt(value)});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const calculateTotal = () => {
        if(!formData.size) return 0;
        const basePrice = formData.size === 'Küçük' ? 20 : formData.size === 'Orta' ? 30 : 40;
        const toppingCost = formData.toppings.length * toppingPrice;
        return (basePrice + toppingCost) * formData.quantity;
    }

    const validate = () => {
        const newErrors = {};
        if (formData.name.length<3){
            newErrors.name = 'İsim en az 3 karakter olmalı.';
        }
        if (!formData.size) {
            newErrors.size = 'Pizza boyutu seçmelisiniz.';
          }
        if (!formData.thickness) {
            newErrors.thickness = 'Hamur seçimi yapmalısınız.';
          }
        if (formData.toppings.length <4 || formData.toppings.length>10) {
            newErrors.toppings ="En az 4, en fazla 10 malzeme seçmelisiniz.";
        }
        return newErrors;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setTotalPrice(calculateTotal());
            try {
                const response = await axios.post('https://reqres.in/api/pizza', formData);
                console.log('Siparişiniz başarıyla gönderildi:' , response.data);
                history.push('/siparis-onay')
                setFormData({
                    name: '',
                    size: '',
                    thickness: '',
                    toppings: [],
                    notes:'',
                    quantity:1, 
                });
                setTotalPrice(0);
            } catch(error) {
                console.error('Siparişiniz gönderilirken hata oluştu:', error);
            } 
        } else {
            setErrors(validationErrors);
        }
    };
    
  return (
    <Container>
        <Header/>
        <div className='order-form-container'> 
        <h2>Position Absolute Acı Pizza</h2>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        <p> <span>85.50₺</span> <span>4.9</span> <span>(200)</span></p>
        <Form onSubmit={handleSubmit}> 
         
         {/* Pizza Boyutu */}
         <FormGroup tag ="fieldset">
            <FormText>Boyut Seç</FormText>
                {sizes.map((size) => (
                <FormGroup check key={size}>
                    <Label check>
                        <Input
                            type="radio"
                            name="size"
                            value={size}
                            checked={formData.size === size}
                            onChange={handleChange}
                        />{' '}
                        {size}
                    </Label>
            </FormGroup>
          ))}
            {errors.size && <div className="text-danger">{errors.size}</div>}
         </FormGroup>
         {/* Hamur Seçimi */}
          <FormGroup>
                <Label for="thickness">Hamur Seç</Label>
                <Input 
                    type="select"
                    name='thickness'
                    id='thickness'
                    value={formData.thickness}
                    onChange={handleChange}
                >
                    <option value ="">Hamur Tipini Seçin</option>
                    {thicknessOptions.map((thickness) => (
                        <option key={thickness} value={thickness}>{thickness}</option>
                    ))}
                </Input>
             {errors.thickness && <div className="text-danger">{errors.thickness}</div>}
            </FormGroup>

         {/* Malzeme Seçimi */}
         <FormGroup>
            <FormText>Ek Malzemeler</FormText>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                {toppingsOptions.map((topping)=>(
                <FormGroup check key = {topping}>
                    <Label htmlFor={topping} check> {topping} </Label>
                        <Input
                         type="checkbox"
                         name="toppings"
                         value={topping}
                         checked={formData.toppings.includes(topping)}
                         onChange={handleChange}
                        /> {' '}
                    
                </FormGroup>
            ))}
            {errors.toppings && (<div className="text-danger">{errors.toppings}</div>)}
         </FormGroup>
         {/* İsim Alanı */}
         <FormGroup>
            <Label for='name'>İsim Soyisim </Label>
            <Input 
                type="text"
                name="name"
                id="name"
                placeholder="İsminizi giriniz"
                value = {formData.name}
                onChange={handleChange}
                invalid = {errors.name ? true : false}
                />
                {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
         </FormGroup>
         {/* Notlar */}
         <FormGroup>
            <Label for="notes">Sipariş Notu</Label>
            <Input
              type="textarea"
              name="notes"
              id="notes"
              placeholder='Siparişinize eklemek istediğiniz bir not var mı?'
              value={formData.notes}
              onChange={handleChange}
            />
         </FormGroup>
         <FormGroup>
            <Label for="quantity">Adet</Label>
                <Input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                    min="1"
                    onChange={handleChange}
                />
        </FormGroup>

         {/* Sipariş Özeti */}
          <div className='order-summary'>
            <h4>Sipariş Toplamı</h4>
            <p>Seçimler: {formData.toppings.length * toppingPrice} </p>
            <p>Toplam: {calculateTotal()}</p>
          </div>
          
         {/* Gönder Butonu */}
         <Button color="primary" type="submit" disabled={!isFormValid} >
            SİPARİŞ VER
          </Button>
        </Form>
        </div>
    </Container>
  );
}
