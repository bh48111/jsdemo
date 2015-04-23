
function find_c() {
    //console.log('hi');

    var a = parseInt($('#find_c_a').val());
    var b = parseInt($('#find_c_b').val());

    var a_squared = a*a;
    var b_squared = b*b;

    var c_squared = a_squared+b_squared;
    var c = Math.sqrt(c_squared);
    $('#output_find_c').html(c);

}

function find_a() {

    var b = parseInt($('#find_a_b').val());
    var c = parseInt($('#find_a_c').val());

    var b_squared = b*b;
    var c_squared = c*c;

    var a_squared = c_squared-b_squared;
    var a = Math.sqrt(a_squared);
    $('#output_find_a').html(a);

}

function find_b() {

    var a = parseInt($('#find_b_a').val());
    var c = parseInt($('#find_b_c').val());

    var a_squared = a*a;
    var c_squared = c*c;

    var b_squared = c_squared-a_squared;
    var b = Math.sqrt(b_squared);
    $('#output_find_b').html(b);

}

$('#find_c').click(find_c);
$('#find_a').click(find_a);
$('#find_b').click(find_b);



function find_prime_number() {
    //1=true 0=false
    var find_which_number = parseInt($('#find_which_number').val());
    var prime_count = 0;
    var prime_list = [];
    var current_number = 2;

    while(find_which_number != prime_count) {
        var is_divisible_by_prime = false;
        prime_list.every(function(prime, i) {
            if (current_number % prime === 0) {
                is_divisible_by_prime = true;
            }
        });

        if (!is_divisible_by_prime) {
            prime_list.push(current_number);
            prime_count++;
        }

        current_number++
    }

    console.log(prime_list[find_which_number-1]);
    console.log(prime_list)

    $('#output_prime_number').html(prime_list[find_which_number-1]);
}

$('#find_prime_number').click(find_prime_number);



function find_fibonacci_number() {

    var find_which_fibonacci_number = parseInt($('#find_which_fibonacci_number').val());
    var fibonacci_list = [];
    var current_fibonacci_number = 0;

    fibonacci_list.push(current_fibonacci_number);
    current_fibonacci_number++;
    fibonacci_list.push(current_fibonacci_number);

    while (fibonacci_list.length != find_which_fibonacci_number) {

        current_fibonacci_number = fibonacci_list[fibonacci_list.length-1] + fibonacci_list[fibonacci_list.length-2];
        fibonacci_list.push(current_fibonacci_number);

    }

    $('#output_fibonacci_number').html(fibonacci_list[find_which_fibonacci_number-1]);

}

$('#find_fibonacci_number').click(find_fibonacci_number);


