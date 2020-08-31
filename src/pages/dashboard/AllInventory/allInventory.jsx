import React, {useEffect, useMemo, useState, useCallback} from 'react';
import Modal from '../../../components/Modal';
import Loading from '../../../components/loading';
import NewInventory from './newInventory';
import TableRow from './tableRow';
import {useFetcher} from '../../../hooks';
import * as S from './styled';


const AllInventory = () => {

  const {request, data: vehicles, isLoading, error} = useFetcher('GET');
  const [openModal, setOpenModal] = useState(false);

  const handleCreateVehicle = () => {
    setOpenModal(true);
  };
  
  const reload = useCallback(() => {
    request('http://localhost:9001/vehicles')
  }, [])
  
  const closeModal = () => {
    setOpenModal(false);
    reload();
  };
  
  const rows = useMemo(() => {
    return (vehicles || []).map((vehicle) => 
    <TableRow 
      id={vehicle.id}
      name={vehicle.name} 
      year={vehicle.manufacturedate} 
      model={vehicle.model} 
      color={vehicle.color }
      vin={vehicle.vin} 
      reload={reload}
    />);
  }, [vehicles]);

  useEffect(() => {
    if(!vehicles){
      request('http://localhost:9001/vehicles')
    }
  }, [vehicles])

 return (
  <S.Wrapper>
  {openModal && (
    <Modal>
      <NewInventory closeModal={closeModal}/>
    </Modal>
  )}
    <div style={{height: "120px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <S.Search>
          <input value="Search Inventory"/>
        </S.Search>
        <S.Button>
          <input type="button" value="Add Inventory" onClick={handleCreateVehicle}/>
        </S.Button>
      </div>
    </div>
    <div>
      <S.TableHeader>
        <h4>Name</h4>
        <h4>Year</h4>
        <h4>Model</h4>
        <h4>Color</h4>
        <h4>VIN</h4>
        <h4></h4>
      </S.TableHeader>
      <S.RowWrapper>
        {isLoading ? (
          <Loading />
        ): rows}
      </S.RowWrapper>
    </div>
  </S.Wrapper>
 )
}

export default AllInventory;
