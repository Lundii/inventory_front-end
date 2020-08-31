import React, {useState, useCallback} from 'react';
import {useFetcher} from '../../../hooks';
import Modal from '../../../components/Modal';
import * as S from './styled';

const TableRow = ({id, name, model, color, vin, year, reload}) => {
  
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const {request, isLoading, error} = useFetcher('DELETE');
  
  const handleDeleteVehicle = useCallback( async () => {
    await request(`http://localhost:9001/vehicles/${id}`);
    setOpenDeleteModal(false);
    reload();
  }, [id])
  const openDelModal = () => {
    setOpenDeleteModal(true);
  }
  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  }
  return (
      <S.TableRow>
          {openDeleteModal && (
            <Modal
              modalText="Are you sure you want to delete this item?"
              rightButtonAction={handleDeleteVehicle}
              leftButtonAction={closeDeleteModal}
              rightButtonText="Yes"
              leftButtonText="No"
              isLoading={isLoading}
            />
          )}
          <div>{name}</div>
          <div>{year}</div>
          <div>{model}</div>
          <div>{color}</div>
          <div>{vin}</div>
          <div>
            <i 
              style={{padding: '0 16px'}} 
              className="fas fa-pen"
            />
            <i  
              style={{padding: '0 16px'}} 
              className="far fa-trash-alt" 
              onClick={openDelModal}
            />
          </div>
      </S.TableRow>
  )
};

export default TableRow;
