# Examples

Here are some of ZURB's official Foundation for Emails templates, refitted into react-inky components with props.

## Sidebar Hero

Based on the template [`sidebar-hero.html`](https://github.com/zurb/foundation-emails/blob/develop/templates/sidebar-hero.html).

The template supports two props, `firstName` and `lastName`, which are inserted into the body of the email.

```jsx
import React from 'react';
import { Callout, Center, Columns, Container, Item, Menu, Row, Spacer, Wrapper } from 'react-inky';

function WelcomeEmail({ firstName, lastName }) {
  return <div>
    <Wrapper className="header">
      <Container>
        <Row className="collapse">
          <Columns small="6">
            <img src="http://placehold.it/200x50/663399" />
          </Columns>
          <Columns small="6">
            <p className="text-right">SIDEBAR HERO</p>
          </Columns>
        </Row>
      </Container>
    </Wrapper>
    <Container>
      <Spacer size="16"></Spacer>
      <Row>
        <Columns>
          <h1>Hi, {firstName} {lastName}</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi impedit sapiente delectus molestias quia.</p>
          <Center>
            <img src="http://placehold.it/570x300" alt="" />
          </Center>
          <Callout className="primary">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam assumenda, praesentium qui vitae voluptate dolores. <a href="#">Click it!</a></p>
          </Callout>
        </Columns>
      </Row>
      <Row>
        <Columns large="7">
          <h3>Hello, {firstName} {lastName}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nobis velit, aliquid pariatur at fugit. Omnis at quae, libero iusto quisquam animi blanditiis neque, alias minima corporis, ab in explicabo?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dignissimos voluptas minus, cupiditate voluptatem, voluptatum iste molestiae consectetur temporibus quae dolore nam possimus reprehenderit blanditiis laborum iusto sit. Perspiciatis, dolor.</p>
          <Callout className="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quas optio totam quidem, placeat sunt, sit iusto fugit. Harum omnis deleniti enim nihil iure, quis laudantium veniam velit animi debitis. <a href="#">Click It!</a>
          </Callout>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus eius amet alias odit accusantium, fugit perspiciatis nulla suscipit nisi. Laborum aliquid, voluptatum consectetur fugiat maxime architecto enim molestias aperiam!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet veritatis, magnam ipsam et vero necessitatibus. Deserunt facilis impedit, adipisci illo laboriosam assumenda fugiat dolorum nam odio aliquid, sit est.</p>
          <Button className="expand" href="#">Click Me!</Button>
        </Columns>
        <Columns large="5" className="sidebar">
          <Callout className="secondary">
            <h5>Header</h5>
            <p className="lead">Sub-header</p>
            <Menu className="vertical">
              <Item href="#">Just a Plain Link &raquo;</Item>
              <Item href="#">Just a Plain Link &raquo;</Item>
              <Item href="#">Just a Plain Link &raquo;</Item>
              <Item href="#">Just a Plain Link &raquo;</Item>
              <Item href="#">Just a Plain Link &raquo;</Item>
              <Item href="#">Just a Plain Link &raquo;</Item>
              <Item href="#">Just a Plain Link &raquo;</Item>
            </Menu>
          </Callout>
          <Callout className="secondary">
            <h6>CONNECT WITH US:</h6>
            <Button className="facebook expand" href="#">Facebook</Button>
            <Button className="twitter expand" href="#">Twitter</Button>
            <Button className="google expand" href="#">Google+</Button>
            <p>CONTACT INFO:</p>
            <p>Phone: 408-341-0600</p>
            <p>Email: <a href="mailto:foundation@zurb.com">foundation@zurb.com</a></p>
          </Callout>
        </Columns>
      </Row>
      <Center>
        <Menu>
          <Item href="#">Terms</Item>
          <Item href="#">Privacy</Item>
          <Item href="#">Unsubscribe</Item>
        </Menu>
      </Center>
    </Container>
  </div>
}
```

## Order

This example is based on ZURB's template [`order.html`], and is passed order info to dynamically generate an email.

```jsx
function OrderTemplate({ order }) {
  return <Container>
    <Spacer size="16"></Spacer>
    <Row>
      <Columns>
        <h1>Thanks for your order.</h1>
        <p>Thanks for shopping with us! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum ducimus, non, eveniet neque dolores voluptas architecto sed, voluptatibus aut dolorem odio. Cupiditate a recusandae, illum cum voluptatum modi nostrum.</p>
        <Spacer size="16"></Spacer>
        <Callout class="secondary">
          <Row>
            <Columns large="6">
              <p><strong>Payment Method</strong><br/>{order.paymentMethod}</p>
              <p><strong>Email Address</strong><br/>{order.userEmail}</p>
              <p><strong>Order ID</strong><br/>{order.id}</p>
            </Columns>
            <Columns large="6">
              <p>
                <strong>Shipping Method</strong><br/>
                {order.shipment.method}
                <strong>Shipping Address</strong><br/>
                {order.shupment.address}
              </p>
            </Columns>
          </Row>
        </Callout>
        <h4>Order Details</h4>
        <table>
        <tr>
          <th>Item</th><th>#</th><th>Price</th></tr>
          {order.items.map(item => <tr><td>{item.name}</td><td>{item.quantity}</td><td>${item.price}</td></tr>)}
          <tr>
            <td colspan="2"><b>Subtotal:</b></td>
            <td>{order.subtotal}</td>
          </tr>
        </table>
        <hr />
        <h4>What's Next?</h4>
        <p>Our carrier raven will prepare your order for delivery. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi necessitatibus itaque debitis laudantium doloribus quasi nostrum distinctio suscipit, magni soluta eius animi voluptatem qui velit eligendi quam praesentium provident culpa?</p>
      </Columns>
    </Row>
    <Row class="footer text-center">
      <Columns large="3">
        <img src="http://placehold.it/170x30" alt="" />
      </Columns>
      <Columns large="3">
        <p>
          Call us at 800.555.1923<br/>
          Email us at support@discount.boat
        </p>
      </Columns>
      <Columns large="3">
        <p>
          123 Maple Rd<br/>
          Campbell, CA 95112
        </p>
      </Columns>
    </Row>
  </Container>
}
```
