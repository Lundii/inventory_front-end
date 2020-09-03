import React, {useState, useEffect, useCallback} from 'react';
import Loading from '../../../components/loading';
import {useFetcher} from '../../../hooks';
import Input from '../../../components/input';
import * as S from './styled';

const NewInventory = ({closeModal, header, id}) => {
	const { data, request, isLoading } = useFetcher('POST');
	const { data: editData, request: editRequest, isLoading: editIsLoading } = useFetcher('GET');
	const [formData, setFormData] = useState({});
	const [validationError, setValidationError] = useState(false);
	
	const validateForm = useCallback(() => {
		const {name, model, manufacturedate, color, vin} = formData;

		if (!name || !name.length ||
			!model || !model.length ||
			!manufacturedate || !manufacturedate.length ||
			!color || !color.length ||
			!vin || !vin.length ) {
				setValidationError(true);
				return true;
			}

			return false;
	}, [formData]);

	const handleFormState = (value, field) => {
		setValidationError(false);
		setFormData(prevState => ({...prevState, [`${field}`]: value}));
	}
	const handleSubmit = () => {
		if (isLoading || validateForm()) return;
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
			{validationError && (<S.Error>Please fill all input values</S.Error>)}
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
