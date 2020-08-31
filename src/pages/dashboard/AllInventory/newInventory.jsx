import React, {useState, useEffect} from 'react';
import Loading from '../../../components/loading';
import {useFetcher} from '../../../hooks';
import Input from '../../../components/input';
import * as S from './styled';

const NewInventory = ({closeModal}) => {
	const { data, request, isLoading, error	} = useFetcher('POST');
	const [formData, setFormData] = useState({});
	
	const handleFormState = (value, field) => {
		console.log(value);
		setFormData(prevState => ({...prevState, [`${field}`]: value}));
	}
  const handleSubmit = () => {
		if (isLoading) return;
        request('http://localhost:9001/vehicles', formData);
  };

  useEffect(() => {
    if (data) {
      closeModal();
    }
  }, [data]);
	return (
		<div>
			<h4>New Vehicle</h4>
			<Input 
				label="Name" 
				field="name"
				handleChange={handleFormState}
			/>
			<Input 
				label="Model"
				field="model"
				handleChange={handleFormState}
			/>
			<Input 
				label="Year"
				field="manufacturedate"
				handleChange={handleFormState}	
			/>
			<Input 
				label="VIN"
				field="vin"
				handleChange={handleFormState}
			/>
			<Input 
				label="Color"
				field="color"
				handleChange={handleFormState}
			/>
			<S.ModalButtons>
				<S.LeftButton
					type="button"
					white
					textColor="primary"
					onClick={() => closeModal()}
				>
					Cancel
				</S.LeftButton>
					<S.RightButton
						className="float-right"
						type="button"
						primary
						onClick={handleSubmit}
					>
						{isLoading && (<i className="fas fa-circle-notch fa-spin" />)}
						{' '}
						Save
					</S.RightButton>
			</S.ModalButtons>
		</div>
	)
}

export default NewInventory;
