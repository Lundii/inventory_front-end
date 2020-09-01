import React, {useState, useEffect} from 'react';
import Loading from '../../../components/loading';
import {useFetcher} from '../../../hooks';
import Input from '../../../components/input';
import * as S from './styled';

const NewInventory = ({closeModal, header, id}) => {
	const { data, request, isLoading, error	} = useFetcher('POST');
	const { data: editData, request: editRequest, isLoading: editIsLoading } = useFetcher('GET');
	const [formData, setFormData] = useState({});
	
	const handleFormState = (value, field) => {
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

  useEffect(() => {
	  if(!editData && id){
		editRequest(`http://localhost:9001/vehicles/${id}`);
	  }
	  if(editData){
		  setFormData(editData);
	  }
  }, [editData])
	return (
		<div>
			<h4>{header || "New Vehicle"}</h4>
			<Input 
				label="Name" 
				field="name"
				initialValue={formData.name}
				handleChange={handleFormState}
			/>
			<Input 
				label="Model"
				field="model"
				initialValue={formData.model}
				handleChange={handleFormState}
			/>
			<Input 
				label="Year"
				field="manufacturedate"
				initialValue={formData.manufacturedate}
				handleChange={handleFormState}	
			/>
			<Input 
				label="VIN"
				field="vin"
				initialValue={formData.vin}
				handleChange={handleFormState}
			/>
			<Input 
				label="Color"
				field="color"
				initialValue={formData.color}
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
