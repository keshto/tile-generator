function addProp(){
  var prop=`<div class="prop">
    name: <input type="text" name="name"><br>
    type: <select>
      <option value="string">String</option>
      <option value="integer">Integer</option>
      <option value="boolean">Boolean</option>
      <option value="dropdown_select">A dropdown list</option>
      <option value="multi_select_options">Multi-select Options</option>
      <option value="domain">A second domain</option>
      <option value="wildcard_domain">Wildcard Domain</option>
      <option value="text">Text</option>
      <option value="ldap_url">ldap URL</option>
      <option value="email">Email Address</option>
      <option value="ip_ranges">IP Ranges</option>
      <option value="port">Port</option>
      <option value="network_address">Network Address</option>
      <option value="network_address_list">Network Address List</option>
      <option value="rsa_cert_credentials">RSA Certificate</option>
      <option value="rsa_pkey_credentials">RSA Private Key</option>
      <option value="salted_credentials">Salted Credentials</option>
      <option value="simple_credentials">Simple Credentials</option>
      <option value="secret">Secret</option>
      <option value="uuid">UUID</option>
    </select><br>
    label: <input type="text" name="label"><br>
    value: <input type="text" name="value"><br>
  </div>`
  $("#propContainer").append(prop);
};

function addForm(){
  var form=`<div class="prop">
    name: <input type="text" name="name"><br>
    label: <input type="text" name="label"><br>
    description:<br>
    <textarea name="description" rows="3" cols="33"></textarea><br>
    properties:<br>
    <textarea name="description" rows="3" cols="33"></textarea><br>
  </div>`
  $("#formContainer").append(form);
};

function addPkg(){
  var pkgType = $("#pkgSelector").val();
  $("#pkgSelector").val('default');
  switch (pkgType) {
    case "default":
      break;
    case "app":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          cpu: <input type="text" name="cpu"><br>
          memory: <input type="text" name="memory"><br>
          instances: <input type="text" name="instances"><br>
          consumes:<br>
          <textarea name="consumes" rows="3" cols="33"></textarea><br>
          health_check: <input type="checkbox" name="health_check" checked><br>
          auto_services:<br>
          <textarea name="auto_services" rows="3" cols="33"></textarea><br>
          needs_cf_credentials: <input type="checkbox" name="health_check"><br>
        </div>
        </div>
      </div>`
      break;
    case "app-broker":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          consumes:<br>
          <textarea name="consumes" rows="3" cols="33"></textarea><br>
          enable_global_access_to_plans: <input type="checkbox" name="enable_global_access_to_plans" checked><br>
          internal_service_names:<br>
          <textarea name="internal_service_names" rows="3" cols="33"></textarea><br>
        </div>
        </div>
      </div>`
      break;
    case "buildpack":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        path: <input type="text" name="path"><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          buildpack_order: <input type="text" name="buildpack_order"><br>
        </div>
        </div>
      </div>`
      break;
    case "bosh-release":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="description" rows="3" cols="33"></textarea><br>
        whateverelse:<br>
        <textarea name="description" rows="3" cols="33"></textarea><br>
      </div>`
      break;
    case "blob":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          consumes:<br>
          <textarea name="consumes" rows="3" cols="33"></textarea><br>
          health_check: <input type="checkbox" name="health_check" checked><br>
          auto_services:<br>
          <textarea name="auto_services" rows="3" cols="33"></textarea><br>
          needs_cf_credentials: <input type="checkbox" name="health_check"><br>
        </div>
        </div>
      </div>`
      break;
    case "decorator":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        path: <input type="text" name="path"><br>
      </div>`
      break;
    case "docker-app":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="description" rows="3" cols="33"></textarea><br>
        whateverelse:<br>
        <textarea name="description" rows="3" cols="33"></textarea><br>
      </div>`
      break;
    case "docker-app-broker":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        image: <input type="text" name="image"><br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          auto_services:<br>
          <textarea name="auto_services" rows="3" cols="33"></textarea><br>
        </div>
        </div>
      </div>`
      break;
    case "docker-bosh":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        docker_images: <input type="text" name="docker_images"><br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          cpu: <input type="text" name="cpu"><br>
          memory: <input type="text" name="memory"><br>
          instances: <input type="text" name="instances"><br>
          routes:<br>
          <textarea name="routes" rows="3" cols="33"></textarea><br>
        </div>
        </div>
      </div>`
      break;
    case "external-broker":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          consumes:<br>
          <textarea name="consumes" rows="3" cols="33"></textarea><br>
          health_check: <input type="checkbox" name="health_check" checked><br>
          auto_services:<br>
          <textarea name="auto_services" rows="3" cols="33"></textarea><br>
          needs_cf_credentials: <input type="checkbox" name="health_check"><br>
        </div>
        </div>
      </div>`
      break;
    case "helm":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        manifest:<br>
        <textarea name="manifest" rows="3" cols="33"></textarea><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          consumes:<br>
          <textarea name="consumes" rows="3" cols="33"></textarea><br>
          health_check: <input type="checkbox" name="health_check" checked><br>
          auto_services:<br>
          <textarea name="auto_services" rows="3" cols="33"></textarea><br>
          needs_cf_credentials: <input type="checkbox" name="health_check"><br>
        </div>
        </div>
      </div>`
      break;
    case "kibosh":
      pkg = `<div class="prop">
        name: <input type="text" name="name"><br>
        type: ` + pkgType + `<br>
        helm_chart_dir: <input type="text" name="helm_chart_dir"><br>
        <div class="collapsable">
        <h3>Optional<i class="arrow"></i></h3>
        <div>
          enable_global_access_to_plans: <input type="checkbox" name="enable_global_access_to_plans" checked><br>
        </div>
        </div>
      </div>`
  };
  if (pkg != null){
    $("#pkgContainer").append(pkg);
    $(".collapsable").collapse({
      //options
    });
  };
};


// based off of https://codepen.io/gabrieleromanato/pen/LpLVeQ
(function() {
  function toJSONString( form ) {
    var obj = {};
    var elements = form.querySelectorAll( "input, select, textarea" );
    for( var i = 0; i < elements.length; ++i ) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;

      if( name ) {
        obj[ name ] = value;
      }
    }

    return JSON.stringify( obj );
  }

  document.addEventListener( "DOMContentLoaded", function() {
    var form = document.getElementById( "tileForm" );
    var output = document.getElementById( "output" );
    form.addEventListener( "submit", function( e ) {
      e.preventDefault();
      var json = toJSONString( this );
      output.innerHTML = json;

    }, false);

  });

})();
