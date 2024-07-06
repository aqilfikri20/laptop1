import React from 'react';
import { useSearchParams } from 'react-router-dom';
import LaptopList from '../LaptopList';
import SearchBar from '../SearchBar';
import { deleteContact, getContacts } from '../utils/api';
import { LocaleConsumer } from '../utils/LocaleContext';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  const updateImageUrl = (url) => {
  
    console.log("Updated image URL:", url);
  };

  return <HomePageAdmin defaultKeyword={keyword} keywordChange={changeSearchParams} updateImageUrl={updateImageUrl} />
}

class HomePageAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || '',
      imageUrls: {}, 
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.updateImageUrl = this.updateImageUrl.bind(this);
  }

  async componentDidMount() {
    const { data } = await getContacts();
    
    this.setState(() => {
      return {
        contacts: data
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteContact(id);


    const { data  } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  updateImageUrl(contactId, imageUrl) {
    this.setState((prevState) => ({
      imageUrls: {
        ...prevState.imageUrls,
        [contactId]: imageUrl,
      },
    }));
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <section className='Home'>
              <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
              <h2>{locale === 'id' ? 'Daftar Laptop' : 'Laptop List'}</h2>
              <LaptopList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
          )
        }
      }
    </LocaleConsumer>
  )
  }
}

export default HomePageWrapper;