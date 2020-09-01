import React, {useState, useCallback} from 'react';
import NewInventory from './newInventory';
import {useFetcher} from '../../../hooks';
import Modal from '../../../components/Modal';
import * as S from './styled';

const TableRow = ({id, name, model, color, vin, year, reload}) => {
  
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const {request, isLoading, error} = useFetcher('DELETE');
  
  const handleDeleteVehicle = useCallback( async () => {
    await request(`http://localhost:9001/vehicles/${id}`);
    setOpenDeleteModal(false);
    reload();
  }, [id])
  const openDelModal = () => {
    setOpenDeleteModal(true);
  }
  const openEdModal = () => {
    setOpenEditModal(true);
  }
  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  }
  const closeModal = () => {
    setOpenEditModal(false);
    reload();
  };
  return (
      <S.TableRow>
          {openDeleteModal && (
            <Modal
              headerText="Delete Vehicle"
              modalText="Are you sure you want to delete this vehicle?"
              rightButtonAction={handleDeleteVehicle}
              leftButtonAction={closeDeleteModal}
              rightButtonText="Yes"
              leftButtonText="No"
              isLoading={isLoading}
            />
          )}
          {openEditModal && (
            <Modal>
              <NewInventory 
                closeModal={closeModal} 
                header="Edit Vehicle" 
                id={id}
              />
            </Modal>
          )}
          <div>{name}</div>
          <div>{year}</div>
          <div>{model}</div>
          <div>{color}</div>
          <div>{vin}</div>
          <div>
            <i 
              style={{padding: '0 16px', cursor: 'pointer'}} 
              className="fas fa-pen"
              onClick={openEdModal}
            />
            <i  
              style={{padding: '0 16px', cursor: 'pointer'}} 
              className="far fa-trash-alt" 
              onClick={openDelModal}
            />
          </div>
      </S.TableRow>
  )
};

export default TableRow;
