import React, {useState, useCallback} from 'react';
import NewInventory from './NewInventory';
import {useFetcher} from '../../hooks';
import {Modal} from '../../components';
import * as S from './styled';

const SellVehicleModal = () => {

  return (
    <div>
      <h4>Vehicle Information</h4>
      <S.VehicleDataRow>
        <p>Name</p>
        <p>Camry</p>
      </S.VehicleDataRow>
      <S.VehicleDataRow>
        <p>Name</p>
        <p>Camry</p>
      </S.VehicleDataRow>
      <S.VehicleDataRow>
        <p>Name</p>
        <p>Camry</p>
      </S.VehicleDataRow>
      <S.VehicleDataRow>
        <p>Name</p>
        <p>Camry</p>
      </S.VehicleDataRow>
      <S.VehicleDataRow>
        <p>Name</p>
        <p>Camry</p>
      </S.VehicleDataRow>
      <S.VehicleDataRow>
        <p>Name</p>
        <p>Camry</p>
      </S.VehicleDataRow>
    </div>
  )
}
const TableRow = ({id, name, model, color, vin, year, price, reload}) => {
  
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [viewInfo, setViewInfo] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const {request, isLoading, error} = useFetcher('DELETE');
  
  const handleDeleteVehicle = useCallback( async () => {
    await request(`http://localhost:9001/vehicles/${id}`);
    setOpenDeleteModal(false);
    reload();
  }, [id])

  const openDelModal = (event) => {
    setOpenDeleteModal(true);
    event.stopPropagation();
  }
  const openEdModal = (event) => {
    setOpenEditModal(true);
    event.stopPropagation();
  }

  const openInModal = () => {
    setOpenInfoModal(true);
    setViewInfo(true);
  }
  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  }
  const closeModal = () => {
    setOpenEditModal(false);
    setOpenInfoModal(false);
    setViewInfo(false);
    reload();
  };
  return (
    <S.TableRowWrapper>
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
      {(openEditModal || openInfoModal ) && (
        <Modal>
          <NewInventory 
            closeModal={closeModal} 
            header= {viewInfo ? "Vehicle Information":"Edit Vehicle" }
            id={id}
            viewInfo={viewInfo}
          />
        </Modal>
      )}
      <S.TableRow onClick={openInModal}>
          <div>{name}</div>
          <div>{year}</div>
          <div>{model}</div>
          <div>{`$ ${price}`}</div>
          <div>{color}</div>
          <div>{vin}</div>
          <div>
            <i 
              style={{padding: '0 16px', cursor: 'pointer', zIndex: 5}} 
              className="fas fa-pen"
              onClick={openEdModal}
            />
            <i  
              style={{padding: '0 16px', cursor: 'pointer', zIndex: 5}}
              className="far fa-trash-alt" 
              onClick={openDelModal}
            />
          </div>
      </S.TableRow>
    </S.TableRowWrapper>
  )
};

export default TableRow;
