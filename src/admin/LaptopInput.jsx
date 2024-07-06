import React from 'react';
import UploadFile from './UploadFile';

class LaptopInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
      phoneNumber: '',
      imageUrl: '',
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onHargaChangeEventHandler = this.onHargaChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onImageUploadComplete = this.onImageUploadComplete.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState({ name: event.target.value });
  }

  onTagChangeEventHandler(event) {
    const value = event.target.value;
    const formattedSpec = {
      Kategori: value.match(/Kategori:(.*?)(?=\n|$)/)?.[1]?.trim() || '',
      RAM: value.match(/RAM:(.*?)(?=\n|$)/)?.[1]?.trim() || '',
      Processor: value.match(/Processor:(.*?)(?=\n|$)/)?.[1]?.trim() || '',
      Storage: value.match(/Storage:(.*?)(?=\n|$)/)?.[1]?.trim() || '',
      Layar: value.match(/Layar:(.*?)(?=\n|$)/)?.[1]?.trim() || '',
    };
    this.setState({
      tag: `Kategori: ${formattedSpec.Kategori}\nProcessor: ${formattedSpec.Processor}\nRAM: ${formattedSpec.RAM}\nStorage: ${formattedSpec.Storage}\nLayar: ${formattedSpec.Layar}`,
    });
  }

  onHargaChangeEventHandler(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const newContact = {
      id: new Date().toISOString(), // Menghasilkan ID unik, bisa disesuaikan
      name: this.state.name,
      tag: this.state.tag,
      phoneNumber: this.state.phoneNumber,
    };
    this.props.addContact(newContact);
    if (this.state.imageUrl) {
      this.props.updateImageUrl(newContact.id, this.state.imageUrl);
    }
  }

  onImageUploadComplete(imageUrl) {
    console.log('Image URL Received:', imageUrl);
    this.setState({ imageUrl });
  }

  render() {
    return (
      <form className='laptop-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <textarea name='spec' rows='5' cols='30' placeholder="Kategori:&#10;Processor:&#10;RAM:&#10;Storage:&#10;Layar:" style={{ whiteSpace: 'pre-wrap' }} value={this.state.tag} onChange={this.onTagChangeEventHandler} ></textarea>
        <input type="text" placeholder="Harga" value={this.state.phoneNumber} onChange={this.onHargaChangeEventHandler} />
        <UploadFile onUploadComplete={this.onImageUploadComplete} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default LaptopInput;
